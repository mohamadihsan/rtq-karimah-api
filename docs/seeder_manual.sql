INSERT INTO master.t_company
(company_id, company_name_var, email_var, phone_number_var, fax_number_var, address_text, logo_var, account_number_var, account_name_var, bank_account_var, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(1, 'Rumah Tahfidz Quran Karimah', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, true, '2020-04-06 22:14:03.375', 0, '2020-04-06 22:14:03.000', 0, NULL, NULL);


INSERT INTO master.t_location
(location_id, company_id, location_name_var, country_name_var, city_name_var, address_text, longitude, latitude, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(1, 1, 'Rumah Irfan', 'Indonesia', 'Bandung', 'Ujung Berung Rumah Irfan', -6.9118013, 107.7019481, true, '2020-04-06 22:18:04.874', 0, '2020-04-06 22:18:04.000', 0, NULL, NULL);
INSERT INTO master.t_location
(location_id, company_id, location_name_var, country_name_var, city_name_var, address_text, longitude, latitude, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(2, 1, 'RTQ Karimah', 'Indonesia', 'Bogor', 'Komplek Pesona Citayam Blok B 11 A no.12, Susukan, Kec. Bojong Gede, Bogor, Jawa Barat 16920', -6.460605, 106.790792, true, '2020-04-06 22:18:04.874', 0, '2020-04-06 22:18:04.000', 0, NULL, NULL);


INSERT INTO public.t_gender
(gender_id, gender_name_var, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(1, 'laki-laki', true, '2020-04-06 22:09:47.395', 0, NULL, NULL, NULL, NULL);
INSERT INTO public.t_gender
(gender_id, gender_name_var, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(2, 'perempuan', true, '2020-04-06 22:09:47.395', 0, NULL, NULL, NULL, NULL);


INSERT INTO public.t_position
(position_id, position_name_var, level_order_int, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(1, 'Pembina', 1, true, '2020-04-06 22:09:47.412', 0, NULL, NULL, NULL, NULL);
INSERT INTO public.t_position
(position_id, position_name_var, level_order_int, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(2, 'Ketua Yayasan', 2, true, '2020-04-06 22:09:47.412', 0, NULL, NULL, NULL, NULL);
INSERT INTO public.t_position
(position_id, position_name_var, level_order_int, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(3, 'Penanggung Jawab Santri', 3, true, '2020-04-06 22:09:47.412', 0, NULL, NULL, NULL, NULL);
INSERT INTO public.t_position
(position_id, position_name_var, level_order_int, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(4, 'Sekretaris', 3, true, '2020-04-06 22:09:47.412', 0, NULL, NULL, NULL, NULL);
INSERT INTO public.t_position
(position_id, position_name_var, level_order_int, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(5, 'Bendahara', 3, true, '2020-04-06 22:09:47.412', 0, NULL, NULL, NULL, NULL);
INSERT INTO public.t_position
(position_id, position_name_var, level_order_int, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(6, 'Guru Tahsin/Tahfidz Reguler', 4, true, '2020-04-06 22:09:47.412', 0, NULL, NULL, NULL, NULL);
INSERT INTO public.t_position
(position_id, position_name_var, level_order_int, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(7, 'Guru Tahsin/Tahfidz Anak', 4, true, '2020-04-06 22:09:47.412', 0, NULL, NULL, NULL, NULL);
INSERT INTO public.t_position
(position_id, position_name_var, level_order_int, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(8, 'Staff Administrasi', 4, true, '2020-04-06 22:09:47.412', 0, NULL, NULL, NULL, NULL);
INSERT INTO public.t_position
(position_id, position_name_var, level_order_int, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(9, 'Sarana Prasarana', 4, true, '2020-04-06 22:09:47.412', 0, NULL, NULL, NULL, NULL);
INSERT INTO public.t_position
(position_id, position_name_var, level_order_int, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(10, 'Musyrifah', 5, true, '2020-04-06 22:09:47.412', 0, NULL, NULL, NULL, NULL);


INSERT INTO master.t_employees
(employee_id, identity_number_var, fullname_var, nickname_var, gender_id, place_of_birth_var, date_of_birth_on_dtm, address_var, religion_id, marital_status_id, company_id, position_id, employment_status_id, join_date_on_dtm, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(1, '20200504', 'Irfan Rangga Gumilar', 'Irfan', 1, 1, NULL, NULL, NULL, NULL, 1, 6, NULL, NULL, true, '2020-04-05 14:39:27.676', 0, '2020-04-05 14:39:27.000', 0, NULL, NULL);
INSERT INTO master.t_employees
(employee_id, identity_number_var, fullname_var, nickname_var, gender_id, place_of_birth_var, date_of_birth_on_dtm, address_var, religion_id, marital_status_id, company_id, position_id, employment_status_id, join_date_on_dtm, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(2, '20200505', 'Mohamad Ihsan', 'Ihsan', 1, 1, NULL, NULL, NULL, NULL, 1, 7, NULL, NULL, true, '2020-04-05 14:39:27.676', 0, '2020-04-05 14:39:27.000', 0, NULL, NULL);
INSERT INTO master.t_employees
(employee_id, identity_number_var, fullname_var, nickname_var, gender_id, place_of_birth_var, date_of_birth_on_dtm, address_var, religion_id, marital_status_id, company_id, position_id, employment_status_id, join_date_on_dtm, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(3, '20200506', 'Julio Febryanto', 'Julio', 1, 1, NULL, NULL, NULL, NULL, 1, 7, NULL, NULL, true, '2020-04-05 14:39:27.676', 0, '2020-04-05 14:39:27.000', 0, NULL, NULL);


INSERT INTO public.t_presence
(presence_id, description_var, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(1, 'Full Camera, GPS and Detect', true, '2020-04-05 14:42:58.129', 0, '2020-04-05 14:42:58.000', 0, NULL, NULL);
INSERT INTO public.t_presence
(presence_id, description_var, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(2, 'Hidden Camera and GPS', true, '2020-04-05 14:42:58.129', 0, '2020-04-05 14:42:58.000', 0, NULL, NULL);
INSERT INTO public.t_presence
(presence_id, description_var, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(3, 'GPS Only', true, '2020-04-05 14:42:58.129', 0, '2020-04-05 14:42:58.000', 0, NULL, NULL);


INSERT INTO public.t_user_group
(user_group_id, user_group_name_var, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(1, 'administrator', true, '2020-03-04 08:46:59.126', 0, '2020-03-04 08:46:59.126', NULL, NULL, NULL);
INSERT INTO public.t_user_group
(user_group_id, user_group_name_var, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(2, 'Staff / Guru', true, '2020-03-04 08:46:59.126', 0, '2020-03-04 08:46:59.126', NULL, NULL, NULL);


INSERT INTO public.t_user
(user_id, username_var, password_var, email_var, user_group_id, employee_id, token_text, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(1, 'admin', '$2a$08$VRfehKWEn7FQv4oK/QodaeAlmcD8E7sbXt71CjCBZQh4SyCXRrX3C', 'mohamad_ihsan100@yahoo.co.id', 1, NULL, NULL, true, '2020-03-04 08:46:59.161', 0, '2020-03-04 08:46:59.161', NULL, NULL, NULL);
INSERT INTO public.t_user
(user_id, username_var, password_var, email_var, user_group_id, employee_id, token_text, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(2, 'irfan', '$2a$08$VRfehKWEn7FQv4oK/QodaeAlmcD8E7sbXt71CjCBZQh4SyCXRrX3C', 'irfanrangga16@yahoo.com', 2, 1, NULL, true, '2020-03-04 08:46:59.161', 0, '2020-03-04 08:46:59.161', NULL, NULL, NULL);
INSERT INTO public.t_user
(user_id, username_var, password_var, email_var, user_group_id, employee_id, token_text, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(3, 'ihsan', '$2a$08$VRfehKWEn7FQv4oK/QodaeAlmcD8E7sbXt71CjCBZQh4SyCXRrX3C', 'mohamad_ihsan100@yahoo.co_id', 2, 2, NULL, true, '2020-03-04 08:46:59.161', 0, '2020-03-04 08:46:59.161', NULL, NULL, NULL);
INSERT INTO public.t_user
(user_id, username_var, password_var, email_var, user_group_id, employee_id, token_text, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(4, 'julio', '$2a$08$VRfehKWEn7FQv4oK/QodaeAlmcD8E7sbXt71CjCBZQh4SyCXRrX3C', 'julio@yahoo.co_id', 2, 3, NULL, true, '2020-03-04 08:46:59.161', 0, '2020-03-04 08:46:59.161', NULL, NULL, NULL);


INSERT INTO public.t_user_setting
(user_id, presence_id, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(1, 1, true, '2020-04-05 14:42:58.000', 0, '2020-04-05 14:42:58.000', 0, NULL, NULL);
INSERT INTO public.t_user_setting
(user_id, presence_id, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(2, 3, true, '2020-04-05 14:42:58.000', 0, '2020-04-05 14:42:58.000', 0, NULL, NULL);
INSERT INTO public.t_user_setting
(user_id, presence_id, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(3, 2, true, '2020-04-05 14:42:58.000', 0, '2020-04-05 14:42:58.000', 0, NULL, NULL);
INSERT INTO public.t_user_setting
(user_id, presence_id, active_status_boo, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by)
VALUES(4, 1, true, '2020-04-05 14:42:58.000', 0, '2020-04-05 14:42:58.000', 0, NULL, NULL);
