import { sqliteTable, AnySQLiteColumn, integer, numeric, text, uniqueIndex, index, foreignKey, real } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const fetchlog = sqliteTable("fetchlog", {
	id: integer("id").primaryKey().notNull(),
	url: numeric("url").notNull(),
	response: text("response"),
	body: text("body"),
	cdate: numeric("cdate").notNull(),
	source: numeric("source"),
});

export const user = sqliteTable("user", {
	id: integer("id").primaryKey().notNull(),
	username: numeric("username").notNull(),
	password: numeric("password").notNull(),
	posId: integer("pos_id"),
	lastLogin: numeric("last_login").notNull(),
	cdate: numeric("cdate").notNull(),
	active: numeric("active"),
},
(table) => {
	return {
		username: uniqueIndex("user_username").on(table.username),
	}
});

export const daily = sqliteTable("daily", {
	id: integer("id").primaryKey().notNull(),
	posId: integer("pos_id").notNull().references(() => pos.id),
	nama: numeric("nama").notNull(),
	sampling: numeric("sampling").notNull(),
	raw: text("raw").notNull(),
	dataCount: integer("data_count").notNull(),
	mRain: real("m_rain"),
	mWlevel7: real("m_wlevel_7"),
	mWlevel12: real("m_wlevel_12"),
	mWlevel17: real("m_wlevel_17"),
},
(table) => {
	return {
		posId: index("daily_pos_id").on(table.posId),
	}
});

export const posmap = sqliteTable("posmap", {
	id: integer("id").primaryKey().notNull(),
	source: numeric("source").notNull(),
	dari: numeric("dari").notNull(),
	ke: numeric("ke").notNull(),
	keId: integer("ke_id"),
});

export const opos = sqliteTable("opos", {
	id: integer("id").primaryKey().notNull(),
	nama: numeric("nama").notNull(),
	tipe: numeric("tipe"),
	latestSampling: numeric("latest_sampling").notNull(),
	source: numeric("source").notNull(),
},
(table) => {
	return {
		latestSampling: index("opos_latest_sampling").on(table.latestSampling),
		nama: uniqueIndex("opos_nama").on(table.nama),
	}
});

export const rdaily = sqliteTable("rdaily", {
	id: integer("id").primaryKey().notNull(),
	source: numeric("source").notNull(),
	nama: numeric("nama").notNull(),
	sampling: numeric("sampling").notNull(),
	raw: text("raw").notNull(),
	dataCount: integer("data_count").notNull(),
	mRain: real("m_rain"),
	mWlevel7: real("m_wlevel_7"),
	mWlevel12: real("m_wlevel_12"),
	mWlevel17: real("m_wlevel_17"),
},
(table) => {
	return {
		namaSampling: uniqueIndex("rdaily_nama_sampling").on(table.nama, table.sampling),
		sampling: index("rdaily_sampling").on(table.sampling),
		nama: index("rdaily_nama").on(table.nama),
	}
});

export const pos = sqliteTable("pos", {
	id: integer("id").primaryKey().notNull(),
	nama: numeric("nama").notNull(),
	ll: numeric("ll"),
	tipe: numeric("tipe"),
	elevasi: integer("elevasi"),
	latestSampling: numeric("latest_sampling"),
	latestUp: numeric("latest_up"),
	dasId: integer("das_id").references(() => das.id),
	sungai: numeric("sungai"),
	sh: real("sh"),
	sk: real("sk"),
	sm: real("sm"),
	desa: numeric("desa"),
	kecamatan: numeric("kecamatan"),
	kabupaten: numeric("kabupaten"),
	cdate: numeric("cdate").notNull(),
	mdate: numeric("mdate"),
});

export const petugas = sqliteTable("petugas", {
	id: integer("id").primaryKey().notNull(),
	nama: numeric("nama").notNull(),
	nik: numeric("nik"),
	hp: numeric("hp"),
	dusun: numeric("dusun"),
	rt: integer("rt"),
	rw: integer("rw"),
	desa: numeric("desa"),
	kecamatan: numeric("kecamatan"),
	kabupaten: numeric("kabupaten"),
	pendidikan: numeric("pendidikan"),
	posId: integer("pos_id").references(() => pos.id),
	tipe: numeric("tipe"),
},
(table) => {
	return {
		posId: index("petugas_pos_id").on(table.posId),
	}
});