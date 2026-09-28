CREATE TABLE `cases` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`slug` text NOT NULL,
	`category` text NOT NULL,
	`title` text NOT NULL,
	`region` text NOT NULL,
	`lat` real NOT NULL,
	`lon` real NOT NULL,
	`date_label` text NOT NULL,
	`status` text NOT NULL,
	`status_label` text,
	`witnesses` text NOT NULL,
	`hook` text NOT NULL,
	`summary` text NOT NULL,
	`explanation` text NOT NULL,
	`wiki` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `cases_slug_unique` ON `cases` (`slug`);--> statement-breakpoint
CREATE TABLE `echoes` (
	`story_id` integer NOT NULL,
	`visitor_id` text NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	PRIMARY KEY(`story_id`, `visitor_id`),
	FOREIGN KEY (`story_id`) REFERENCES `stories`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `stories` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`slug` text,
	`category` text NOT NULL,
	`place` text NOT NULL,
	`region` text DEFAULT '' NOT NULL,
	`lat` real NOT NULL,
	`lon` real NOT NULL,
	`year` integer,
	`time_label` text,
	`witnesses` text,
	`hook` text NOT NULL,
	`body` text NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`is_sample` integer DEFAULT false NOT NULL,
	`narrated` integer DEFAULT false NOT NULL,
	`narration_length` text,
	`echo_seed` integer DEFAULT 0 NOT NULL,
	`ip_hash` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`reviewed_at` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `stories_slug_unique` ON `stories` (`slug`);--> statement-breakpoint
CREATE INDEX `stories_status_idx` ON `stories` (`status`);--> statement-breakpoint
CREATE INDEX `stories_ip_idx` ON `stories` (`ip_hash`,`created_at`);