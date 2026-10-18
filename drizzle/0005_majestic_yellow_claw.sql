CREATE TABLE `reports` (
	`story_id` integer NOT NULL,
	`user_id` text NOT NULL,
	`reason` text NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	PRIMARY KEY(`story_id`, `user_id`),
	FOREIGN KEY (`story_id`) REFERENCES `stories`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
