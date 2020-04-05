INSERT INTO master.t_employees
(employee_id, identity_number_var, fullname_var, nickname_var, gender_id, place_of_birth_var, date_of_birth_on_dtm, address_var, religion_id, marital_status_id, company_id, position_id, employment_status_id, join_date_on_dtm, active_status_boo, created_on_dtm, created_by_int, updated_on_dtm, updated_by_int, deleted_on_dtm, deleted_by_int)
VALUES(1, '20200504', 'Irfan Rangga Gumilar', 'Irfan', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, true, '2020-04-05 14:39:27.676', 0, '2020-04-05 14:39:27.000', 0, NULL, NULL);
INSERT INTO master.t_employees
(employee_id, identity_number_var, fullname_var, nickname_var, gender_id, place_of_birth_var, date_of_birth_on_dtm, address_var, religion_id, marital_status_id, company_id, position_id, employment_status_id, join_date_on_dtm, active_status_boo, created_on_dtm, created_by_int, updated_on_dtm, updated_by_int, deleted_on_dtm, deleted_by_int)
VALUES(2, '20200505', 'Mohamad Ihsan', 'Ihsan', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, true, '2020-04-05 14:39:27.676', 0, '2020-04-05 14:39:27.000', 0, NULL, NULL);


INSERT INTO public.t_presence
(presence_id, description_var, active_status_boo, created_on_dtm, created_by_int, updated_on_dtm, updated_by_int, deleted_on_dtm, deleted_by_int)
VALUES(1, 'Full Camera, GPS and Detect', true, '2020-04-05 14:42:58.129', 0, '2020-04-05 14:42:58.000', 0, NULL, NULL);
INSERT INTO public.t_presence
(presence_id, description_var, active_status_boo, created_on_dtm, created_by_int, updated_on_dtm, updated_by_int, deleted_on_dtm, deleted_by_int)
VALUES(2, 'Hidden Camera and GPS', true, '2020-04-05 14:42:58.129', 0, '2020-04-05 14:42:58.000', 0, NULL, NULL);
INSERT INTO public.t_presence
(presence_id, description_var, active_status_boo, created_on_dtm, created_by_int, updated_on_dtm, updated_by_int, deleted_on_dtm, deleted_by_int)
VALUES(3, 'GPS Only', true, '2020-04-05 14:42:58.129', 0, '2020-04-05 14:42:58.000', 0, NULL, NULL);


INSERT INTO public.t_user_group
(user_group_id, user_group_name_var, active_status_boo, created_on_dtm, created_by_int, updated_on_dtm, updated_by_int, deleted_on_dtm, deleted_by_int)
VALUES(1, 'administrator', true, '2020-03-04 08:46:59.126', 0, '2020-03-04 08:46:59.126', NULL, NULL, NULL);
INSERT INTO public.t_user_group
(user_group_id, user_group_name_var, active_status_boo, created_on_dtm, created_by_int, updated_on_dtm, updated_by_int, deleted_on_dtm, deleted_by_int)
VALUES(2, 'Staff / Guru', true, '2020-03-04 08:46:59.126', 0, '2020-03-04 08:46:59.126', NULL, NULL, NULL);


INSERT INTO public.t_user
(user_id, username_var, password_var, email_var, user_group_id, employee_id, token_text, active_status_boo, created_on_dtm, created_by_int, updated_on_dtm, updated_by_int, deleted_on_dtm, deleted_by_int)
VALUES(1, 'admin', '$2a$08$VRfehKWEn7FQv4oK/QodaeAlmcD8E7sbXt71CjCBZQh4SyCXRrX3C', 'mohamad_ihsan100@yahoo.co.id', 1, NULL, NULL, true, '2020-03-04 08:46:59.161', 0, '2020-03-04 08:46:59.161', NULL, NULL, NULL);
INSERT INTO public.t_user
(user_id, username_var, password_var, email_var, user_group_id, employee_id, token_text, active_status_boo, created_on_dtm, created_by_int, updated_on_dtm, updated_by_int, deleted_on_dtm, deleted_by_int)
VALUES(2, 'irfan', '$2a$08$VRfehKWEn7FQv4oK/QodaeAlmcD8E7sbXt71CjCBZQh4SyCXRrX3C', 'irfanrangga16@yahoo.com', 2, 1, NULL, true, '2020-03-04 08:46:59.161', 0, '2020-03-04 08:46:59.161', NULL, NULL, NULL);
INSERT INTO public.t_user
(user_id, username_var, password_var, email_var, user_group_id, employee_id, token_text, active_status_boo, created_on_dtm, created_by_int, updated_on_dtm, updated_by_int, deleted_on_dtm, deleted_by_int)
VALUES(3, 'ihsan', '$2a$08$VRfehKWEn7FQv4oK/QodaeAlmcD8E7sbXt71CjCBZQh4SyCXRrX3C', 'mohamad_ihsan100@yahoo.co_id', 2, 2, NULL, true, '2020-03-04 08:46:59.161', 0, '2020-03-04 08:46:59.161', NULL, NULL, NULL);


INSERT INTO public.t_user_setting
(user_id, presence_id, active_status_boo, created_on_dtm, created_by_int, updated_on_dtm, updated_by_int, deleted_on_dtm, deleted_by_int)
VALUES(1, 1, true, '2020-04-05 14:42:58.000', 0, '2020-04-05 14:42:58.000', 0, NULL, NULL);
INSERT INTO public.t_user_setting
(user_id, presence_id, active_status_boo, created_on_dtm, created_by_int, updated_on_dtm, updated_by_int, deleted_on_dtm, deleted_by_int)
VALUES(2, 3, true, '2020-04-05 14:42:58.000', 0, '2020-04-05 14:42:58.000', 0, NULL, NULL);
