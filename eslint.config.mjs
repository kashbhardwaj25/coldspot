import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import jsxA11y from "eslint-plugin-jsx-a11y";
import { defineConfig, globalIgnores } from "eslint/config";

const MAX_LINES = 150;

const NO_DB = { group: ["@/db", "@/db/*", "**/db/*"], message: "Only feature queries and actions touch the database." };
const NO_SERVER = { group: ["@/lib/server/*", "**/lib/server/*"], message: "Server-only helpers can't be used here." };
const NO_FEATURES = { group: ["@/features/*", "@/features/**"], message: "Shared code can't depend on a feature." };
const NO_MAP = { group: ["@/features/map/*", "@/features/map/**"], message: "Only routes may import the map screen." };
const NO_FRAMEWORK = {
  group: ["react", "react-dom", "react/*", "next", "next/*", "@/features/*", "@/features/**"],
  message: "The globe engine stays framework-free: no React, Next or other features.",
};

const restrict = (files, patterns, ignores = []) => ({
  files,
  ignores,
  rules: { "no-restricted-imports": ["error", { patterns }] },
});

/** Each file matches exactly one entry, because a later entry would replace the earlier rule, not add to it. */
function boundaries() {
  const tsx = "src/features/**/*.tsx";
  return [
    restrict(["src/components/**", "src/lib/**"], [NO_DB, NO_SERVER, NO_FEATURES], ["src/lib/server/**"]),
    restrict(["src/lib/server/**"], [NO_FEATURES]),
    restrict(["src/app/**"], [NO_DB]),
    restrict(["src/features/globe/**"], [NO_DB, NO_SERVER, NO_FRAMEWORK]),
    // Components get data through props; only .ts queries and actions reach the database.
    restrict(["src/features/map/**"], [NO_DB, NO_SERVER]),
    restrict([tsx], [NO_DB, NO_SERVER, NO_MAP], ["src/features/map/**", "src/features/globe/**"]),
    restrict(["src/features/**/*.ts"], [NO_MAP], ["src/features/map/**", "src/features/globe/**"]),
  ];
}

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "node_modules/**", "drizzle/**", "data/**", "next-env.d.ts"]),

  {
    rules: {
      // Accessibility: next only enables a handful of jsx-a11y rules; turn on the full recommended set.
      ...jsxA11y.flatConfigs.recommended.rules,

      // Small files. Split by responsibility before a file grows past this.
      "max-lines": ["error", { max: MAX_LINES, skipBlankLines: true, skipComments: true }],

      // Correctness
      eqeqeq: ["error", "smart"],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "no-var": "error",
      "object-shorthand": "error",

      // TypeScript
      "@typescript-eslint/consistent-type-imports": ["error", { fixStyle: "inline-type-imports" }],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" },
      ],

      // React
      "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
      "react/self-closing-comp": "error",
      "react/jsx-boolean-value": "error",
    },
  },

  // Layer boundaries. See "Folder structure" in docs/CODING.md.
  ...boundaries(),

  // Seed data is content, not code.
  { files: ["src/data/**"], rules: { "max-lines": "off" } },

  // CLI scripts log to the console on purpose.
  { files: ["scripts/**"], rules: { "no-console": "off" } },

  // Must stay last: turns off rules that clash with Prettier.
  prettier,
]);
