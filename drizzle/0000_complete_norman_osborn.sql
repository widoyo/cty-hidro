-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `fetchlog` (
	`id` integer PRIMARY KEY NOT NULL,
	`url` numeric NOT NULL,
	`response` text,
	`body` text,
	`cdate` numeric NOT NULL,
	`source` numeric
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` integer PRIMARY KEY NOT NULL,
	`username` numeric NOT NULL,
	`password` numeric NOT NULL,
	`pos_id` integer,
	`last_login` numeric NOT NULL,
	`cdate` numeric NOT NULL,
	`active` numeric
);
--> statement-breakpoint
CREATE TABLE `daily` (
	`id` integer PRIMARY KEY NOT NULL,
	`pos_id` integer NOT NULL,
	`nama` numeric NOT NULL,
	`sampling` numeric NOT NULL,
	`raw` text NOT NULL,
	`data_count` integer NOT NULL,
	`m_rain` real,
	`m_wlevel_7` real,
	`m_wlevel_12` real,
	`m_wlevel_17` real,
	FOREIGN KEY (`pos_id`) REFERENCES `pos`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `posmap` (
	`id` integer PRIMARY KEY NOT NULL,
	`source` numeric NOT NULL,
	`dari` numeric NOT NULL,
	`ke` numeric NOT NULL,
	`ke_id` integer
);
--> statement-breakpoint
CREATE TABLE `opos` (
	`id` integer PRIMARY KEY NOT NULL,
	`nama` numeric NOT NULL,
	`tipe` numeric,
	`latest_sampling` numeric NOT NULL,
	`source` numeric NOT NULL
);
--> statement-breakpoint
CREATE TABLE `rdaily` (
	`id` integer PRIMARY KEY NOT NULL,
	`source` numeric NOT NULL,
	`nama` numeric NOT NULL,
	`sampling` numeric NOT NULL,
	`raw` text NOT NULL,
	`data_count` integer NOT NULL,
	`m_rain` real,
	`m_wlevel_7` real,
	`m_wlevel_12` real,
	`m_wlevel_17` real
);
--> statement-breakpoint
CREATE TABLE `pos` (
	`id` integer PRIMARY KEY NOT NULL,
	`nama` numeric NOT NULL,
	`ll` numeric,
	`tipe` numeric,
	`elevasi` integer,
	`latest_sampling` numeric,
	`latest_up` numeric,
	`das_id` integer,
	`sungai` numeric,
	`sh` real,
	`sk` real,
	`sm` real,
	`desa` numeric,
	`kecamatan` numeric,
	`kabupaten` numeric,
	`cdate` numeric NOT NULL,
	`mdate` numeric,
	FOREIGN KEY (`das_id`) REFERENCES `das`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `petugas` (
	`id` integer PRIMARY KEY NOT NULL,
	`nama` numeric NOT NULL,
	`nik` numeric,
	`hp` numeric,
	`dusun` numeric,
	`rt` integer,
	`rw` integer,
	`desa` numeric,
	`kecamatan` numeric,
	`kabupaten` numeric,
	`pendidikan` numeric,
	`pos_id` integer,
	`tipe` numeric,
	FOREIGN KEY (`pos_id`) REFERENCES `pos`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_username` ON `user` (`username`);--> statement-breakpoint
CREATE INDEX `daily_pos_id` ON `daily` (`pos_id`);--> statement-breakpoint
CREATE INDEX `opos_latest_sampling` ON `opos` (`latest_sampling`);--> statement-breakpoint
CREATE UNIQUE INDEX `opos_nama` ON `opos` (`nama`);--> statement-breakpoint
CREATE UNIQUE INDEX `rdaily_nama_sampling` ON `rdaily` (`nama`,`sampling`);--> statement-breakpoint
CREATE INDEX `rdaily_sampling` ON `rdaily` (`sampling`);--> statement-breakpoint
CREATE INDEX `rdaily_nama` ON `rdaily` (`nama`);--> statement-breakpoint
CREATE INDEX `petugas_pos_id` ON `petugas` (`pos_id`);
*/