CREATE TABLE `admin_sessions` (
	`token_hash` text PRIMARY KEY NOT NULL,
	`password_fingerprint` text NOT NULL,
	`expires_at` integer NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL
);
