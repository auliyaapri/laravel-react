PGDMP                       |            laravel_react    17.2    17.2 _    z           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            {           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            |           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            }           1262    16907    laravel_react    DATABASE     �   CREATE DATABASE laravel_react WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Indonesia.1252';
    DROP DATABASE laravel_react;
                     postgres    false            �            1259    16942    cache    TABLE     �   CREATE TABLE public.cache (
    key character varying(255) NOT NULL,
    value text NOT NULL,
    expiration integer NOT NULL
);
    DROP TABLE public.cache;
       public         heap r       postgres    false            �            1259    16949    cache_locks    TABLE     �   CREATE TABLE public.cache_locks (
    key character varying(255) NOT NULL,
    owner character varying(255) NOT NULL,
    expiration integer NOT NULL
);
    DROP TABLE public.cache_locks;
       public         heap r       postgres    false            �            1259    16974    failed_jobs    TABLE     &  CREATE TABLE public.failed_jobs (
    id bigint NOT NULL,
    uuid character varying(255) NOT NULL,
    connection text NOT NULL,
    queue text NOT NULL,
    payload text NOT NULL,
    exception text NOT NULL,
    failed_at timestamp(0) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
    DROP TABLE public.failed_jobs;
       public         heap r       postgres    false            �            1259    16973    failed_jobs_id_seq    SEQUENCE     {   CREATE SEQUENCE public.failed_jobs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.failed_jobs_id_seq;
       public               postgres    false    229            ~           0    0    failed_jobs_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.failed_jobs_id_seq OWNED BY public.failed_jobs.id;
          public               postgres    false    228            �            1259    17060    izin_kehadiran    TABLE       CREATE TABLE public.izin_kehadiran (
    id bigint NOT NULL,
    mahasiswa_id bigint NOT NULL,
    jadwal_id bigint NOT NULL,
    alasan text NOT NULL,
    status character varying(255) DEFAULT 'Pending'::character varying NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    CONSTRAINT izin_kehadiran_status_check CHECK (((status)::text = ANY ((ARRAY['Pending'::character varying, 'Disetujui'::character varying, 'Ditolak'::character varying])::text[])))
);
 "   DROP TABLE public.izin_kehadiran;
       public         heap r       postgres    false            �            1259    17059    izin_kehadiran_id_seq    SEQUENCE     ~   CREATE SEQUENCE public.izin_kehadiran_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.izin_kehadiran_id_seq;
       public               postgres    false    239                       0    0    izin_kehadiran_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.izin_kehadiran_id_seq OWNED BY public.izin_kehadiran.id;
          public               postgres    false    238            �            1259    17010    jadwal_perkuliahan    TABLE     �  CREATE TABLE public.jadwal_perkuliahan (
    id bigint NOT NULL,
    mata_kuliah_id bigint NOT NULL,
    hari character varying(255) NOT NULL,
    jam_mulai time(0) without time zone NOT NULL,
    jam_selesai time(0) without time zone NOT NULL,
    ruang character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    CONSTRAINT jadwal_perkuliahan_hari_check CHECK (((hari)::text = ANY ((ARRAY['Senin'::character varying, 'Selasa'::character varying, 'Rabu'::character varying, 'Kamis'::character varying, 'Jumat'::character varying, 'Sabtu'::character varying, 'Minggu'::character varying])::text[])))
);
 &   DROP TABLE public.jadwal_perkuliahan;
       public         heap r       postgres    false            �            1259    17009    jadwal_perkuliahan_id_seq    SEQUENCE     �   CREATE SEQUENCE public.jadwal_perkuliahan_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.jadwal_perkuliahan_id_seq;
       public               postgres    false    235            �           0    0    jadwal_perkuliahan_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.jadwal_perkuliahan_id_seq OWNED BY public.jadwal_perkuliahan.id;
          public               postgres    false    234            �            1259    16966    job_batches    TABLE     d  CREATE TABLE public.job_batches (
    id character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    total_jobs integer NOT NULL,
    pending_jobs integer NOT NULL,
    failed_jobs integer NOT NULL,
    failed_job_ids text NOT NULL,
    options text,
    cancelled_at integer,
    created_at integer NOT NULL,
    finished_at integer
);
    DROP TABLE public.job_batches;
       public         heap r       postgres    false            �            1259    16957    jobs    TABLE     �   CREATE TABLE public.jobs (
    id bigint NOT NULL,
    queue character varying(255) NOT NULL,
    payload text NOT NULL,
    attempts smallint NOT NULL,
    reserved_at integer,
    available_at integer NOT NULL,
    created_at integer NOT NULL
);
    DROP TABLE public.jobs;
       public         heap r       postgres    false            �            1259    16956    jobs_id_seq    SEQUENCE     t   CREATE SEQUENCE public.jobs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.jobs_id_seq;
       public               postgres    false    226            �           0    0    jobs_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.jobs_id_seq OWNED BY public.jobs.id;
          public               postgres    false    225            �            1259    17041 	   kehadiran    TABLE     �  CREATE TABLE public.kehadiran (
    id bigint NOT NULL,
    mahasiswa_id bigint NOT NULL,
    jadwal_id bigint NOT NULL,
    status_kehadiran character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    CONSTRAINT kehadiran_status_kehadiran_check CHECK (((status_kehadiran)::text = ANY ((ARRAY['Hadir'::character varying, 'Tidak Hadir'::character varying, 'Izin'::character varying, 'Terlambat'::character varying])::text[])))
);
    DROP TABLE public.kehadiran;
       public         heap r       postgres    false            �            1259    17040    kehadiran_id_seq    SEQUENCE     y   CREATE SEQUENCE public.kehadiran_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.kehadiran_id_seq;
       public               postgres    false    237            �           0    0    kehadiran_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.kehadiran_id_seq OWNED BY public.kehadiran.id;
          public               postgres    false    236            �            1259    16986 
   mahasiswas    TABLE     	  CREATE TABLE public.mahasiswas (
    id bigint NOT NULL,
    nim character varying(255) NOT NULL,
    nama_lengkap character varying(255) NOT NULL,
    jenis_kelamin character varying(255) NOT NULL,
    tgl_lahir date NOT NULL,
    alamat text NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    user_id bigint,
    CONSTRAINT mahasiswas_jenis_kelamin_check CHECK (((jenis_kelamin)::text = ANY ((ARRAY['L'::character varying, 'P'::character varying])::text[])))
);
    DROP TABLE public.mahasiswas;
       public         heap r       postgres    false            �            1259    16985    mahasiswas_id_seq    SEQUENCE     z   CREATE SEQUENCE public.mahasiswas_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.mahasiswas_id_seq;
       public               postgres    false    231            �           0    0    mahasiswas_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.mahasiswas_id_seq OWNED BY public.mahasiswas.id;
          public               postgres    false    230            �            1259    16999    mata_kuliah    TABLE       CREATE TABLE public.mata_kuliah (
    id bigint NOT NULL,
    nama_mata_kuliah character varying(255) NOT NULL,
    kode_mata_kuliah character varying(255) NOT NULL,
    deskripsi text,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);
    DROP TABLE public.mata_kuliah;
       public         heap r       postgres    false            �            1259    16998    mata_kuliah_id_seq    SEQUENCE     {   CREATE SEQUENCE public.mata_kuliah_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.mata_kuliah_id_seq;
       public               postgres    false    233            �           0    0    mata_kuliah_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.mata_kuliah_id_seq OWNED BY public.mata_kuliah.id;
          public               postgres    false    232            �            1259    16909 
   migrations    TABLE     �   CREATE TABLE public.migrations (
    id integer NOT NULL,
    migration character varying(255) NOT NULL,
    batch integer NOT NULL
);
    DROP TABLE public.migrations;
       public         heap r       postgres    false            �            1259    16908    migrations_id_seq    SEQUENCE     �   CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.migrations_id_seq;
       public               postgres    false    218            �           0    0    migrations_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;
          public               postgres    false    217            �            1259    16926    password_reset_tokens    TABLE     �   CREATE TABLE public.password_reset_tokens (
    email character varying(255) NOT NULL,
    token character varying(255) NOT NULL,
    created_at timestamp(0) without time zone
);
 )   DROP TABLE public.password_reset_tokens;
       public         heap r       postgres    false            �            1259    16933    sessions    TABLE     �   CREATE TABLE public.sessions (
    id character varying(255) NOT NULL,
    user_id bigint,
    ip_address character varying(45),
    user_agent text,
    payload text NOT NULL,
    last_activity integer NOT NULL
);
    DROP TABLE public.sessions;
       public         heap r       postgres    false            �            1259    16916    users    TABLE     �  CREATE TABLE public.users (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    email_verified_at timestamp(0) without time zone,
    password character varying(255) NOT NULL,
    remember_token character varying(100),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    role character varying(50) DEFAULT 'mahasiswa'::character varying NOT NULL
);
    DROP TABLE public.users;
       public         heap r       postgres    false            �            1259    16915    users_id_seq    SEQUENCE     u   CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public               postgres    false    220            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public               postgres    false    219            �           2604    16977    failed_jobs id    DEFAULT     p   ALTER TABLE ONLY public.failed_jobs ALTER COLUMN id SET DEFAULT nextval('public.failed_jobs_id_seq'::regclass);
 =   ALTER TABLE public.failed_jobs ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    228    229    229            �           2604    17063    izin_kehadiran id    DEFAULT     v   ALTER TABLE ONLY public.izin_kehadiran ALTER COLUMN id SET DEFAULT nextval('public.izin_kehadiran_id_seq'::regclass);
 @   ALTER TABLE public.izin_kehadiran ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    239    238    239            �           2604    17013    jadwal_perkuliahan id    DEFAULT     ~   ALTER TABLE ONLY public.jadwal_perkuliahan ALTER COLUMN id SET DEFAULT nextval('public.jadwal_perkuliahan_id_seq'::regclass);
 D   ALTER TABLE public.jadwal_perkuliahan ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    234    235    235            �           2604    16960    jobs id    DEFAULT     b   ALTER TABLE ONLY public.jobs ALTER COLUMN id SET DEFAULT nextval('public.jobs_id_seq'::regclass);
 6   ALTER TABLE public.jobs ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    225    226    226            �           2604    17044    kehadiran id    DEFAULT     l   ALTER TABLE ONLY public.kehadiran ALTER COLUMN id SET DEFAULT nextval('public.kehadiran_id_seq'::regclass);
 ;   ALTER TABLE public.kehadiran ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    236    237    237            �           2604    16989    mahasiswas id    DEFAULT     n   ALTER TABLE ONLY public.mahasiswas ALTER COLUMN id SET DEFAULT nextval('public.mahasiswas_id_seq'::regclass);
 <   ALTER TABLE public.mahasiswas ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    231    230    231            �           2604    17002    mata_kuliah id    DEFAULT     p   ALTER TABLE ONLY public.mata_kuliah ALTER COLUMN id SET DEFAULT nextval('public.mata_kuliah_id_seq'::regclass);
 =   ALTER TABLE public.mata_kuliah ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    232    233    233            �           2604    16912    migrations id    DEFAULT     n   ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);
 <   ALTER TABLE public.migrations ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    217    218    218            �           2604    16919    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    219    220    220            g          0    16942    cache 
   TABLE DATA           7   COPY public.cache (key, value, expiration) FROM stdin;
    public               postgres    false    223   �x       h          0    16949    cache_locks 
   TABLE DATA           =   COPY public.cache_locks (key, owner, expiration) FROM stdin;
    public               postgres    false    224   y       m          0    16974    failed_jobs 
   TABLE DATA           a   COPY public.failed_jobs (id, uuid, connection, queue, payload, exception, failed_at) FROM stdin;
    public               postgres    false    229   +y       w          0    17060    izin_kehadiran 
   TABLE DATA           m   COPY public.izin_kehadiran (id, mahasiswa_id, jadwal_id, alasan, status, created_at, updated_at) FROM stdin;
    public               postgres    false    239   Hy       s          0    17010    jadwal_perkuliahan 
   TABLE DATA           }   COPY public.jadwal_perkuliahan (id, mata_kuliah_id, hari, jam_mulai, jam_selesai, ruang, created_at, updated_at) FROM stdin;
    public               postgres    false    235   ey       k          0    16966    job_batches 
   TABLE DATA           �   COPY public.job_batches (id, name, total_jobs, pending_jobs, failed_jobs, failed_job_ids, options, cancelled_at, created_at, finished_at) FROM stdin;
    public               postgres    false    227   4z       j          0    16957    jobs 
   TABLE DATA           c   COPY public.jobs (id, queue, payload, attempts, reserved_at, available_at, created_at) FROM stdin;
    public               postgres    false    226   Qz       u          0    17041 	   kehadiran 
   TABLE DATA           j   COPY public.kehadiran (id, mahasiswa_id, jadwal_id, status_kehadiran, created_at, updated_at) FROM stdin;
    public               postgres    false    237   nz       o          0    16986 
   mahasiswas 
   TABLE DATA           ~   COPY public.mahasiswas (id, nim, nama_lengkap, jenis_kelamin, tgl_lahir, alamat, created_at, updated_at, user_id) FROM stdin;
    public               postgres    false    231   �z       q          0    16999    mata_kuliah 
   TABLE DATA           p   COPY public.mata_kuliah (id, nama_mata_kuliah, kode_mata_kuliah, deskripsi, created_at, updated_at) FROM stdin;
    public               postgres    false    233   �{       b          0    16909 
   migrations 
   TABLE DATA           :   COPY public.migrations (id, migration, batch) FROM stdin;
    public               postgres    false    218   4~       e          0    16926    password_reset_tokens 
   TABLE DATA           I   COPY public.password_reset_tokens (email, token, created_at) FROM stdin;
    public               postgres    false    221          f          0    16933    sessions 
   TABLE DATA           _   COPY public.sessions (id, user_id, ip_address, user_agent, payload, last_activity) FROM stdin;
    public               postgres    false    222   (       d          0    16916    users 
   TABLE DATA           {   COPY public.users (id, name, email, email_verified_at, password, remember_token, created_at, updated_at, role) FROM stdin;
    public               postgres    false    220   ��       �           0    0    failed_jobs_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.failed_jobs_id_seq', 1, false);
          public               postgres    false    228            �           0    0    izin_kehadiran_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.izin_kehadiran_id_seq', 1, false);
          public               postgres    false    238            �           0    0    jadwal_perkuliahan_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.jadwal_perkuliahan_id_seq', 3, true);
          public               postgres    false    234            �           0    0    jobs_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.jobs_id_seq', 1, false);
          public               postgres    false    225            �           0    0    kehadiran_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.kehadiran_id_seq', 5, true);
          public               postgres    false    236            �           0    0    mahasiswas_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.mahasiswas_id_seq', 5, true);
          public               postgres    false    230            �           0    0    mata_kuliah_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.mata_kuliah_id_seq', 1, false);
          public               postgres    false    232            �           0    0    migrations_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.migrations_id_seq', 10, true);
          public               postgres    false    217            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 6, true);
          public               postgres    false    219            �           2606    16955    cache_locks cache_locks_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.cache_locks
    ADD CONSTRAINT cache_locks_pkey PRIMARY KEY (key);
 F   ALTER TABLE ONLY public.cache_locks DROP CONSTRAINT cache_locks_pkey;
       public                 postgres    false    224            �           2606    16948    cache cache_pkey 
   CONSTRAINT     O   ALTER TABLE ONLY public.cache
    ADD CONSTRAINT cache_pkey PRIMARY KEY (key);
 :   ALTER TABLE ONLY public.cache DROP CONSTRAINT cache_pkey;
       public                 postgres    false    223            �           2606    16982    failed_jobs failed_jobs_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.failed_jobs
    ADD CONSTRAINT failed_jobs_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.failed_jobs DROP CONSTRAINT failed_jobs_pkey;
       public                 postgres    false    229            �           2606    16984 #   failed_jobs failed_jobs_uuid_unique 
   CONSTRAINT     ^   ALTER TABLE ONLY public.failed_jobs
    ADD CONSTRAINT failed_jobs_uuid_unique UNIQUE (uuid);
 M   ALTER TABLE ONLY public.failed_jobs DROP CONSTRAINT failed_jobs_uuid_unique;
       public                 postgres    false    229            �           2606    17069 "   izin_kehadiran izin_kehadiran_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.izin_kehadiran
    ADD CONSTRAINT izin_kehadiran_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.izin_kehadiran DROP CONSTRAINT izin_kehadiran_pkey;
       public                 postgres    false    239            �           2606    17018 *   jadwal_perkuliahan jadwal_perkuliahan_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.jadwal_perkuliahan
    ADD CONSTRAINT jadwal_perkuliahan_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public.jadwal_perkuliahan DROP CONSTRAINT jadwal_perkuliahan_pkey;
       public                 postgres    false    235            �           2606    16972    job_batches job_batches_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.job_batches
    ADD CONSTRAINT job_batches_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.job_batches DROP CONSTRAINT job_batches_pkey;
       public                 postgres    false    227            �           2606    16964    jobs jobs_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT jobs_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.jobs DROP CONSTRAINT jobs_pkey;
       public                 postgres    false    226            �           2606    17047    kehadiran kehadiran_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.kehadiran
    ADD CONSTRAINT kehadiran_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.kehadiran DROP CONSTRAINT kehadiran_pkey;
       public                 postgres    false    237            �           2606    16996     mahasiswas mahasiswas_nim_unique 
   CONSTRAINT     Z   ALTER TABLE ONLY public.mahasiswas
    ADD CONSTRAINT mahasiswas_nim_unique UNIQUE (nim);
 J   ALTER TABLE ONLY public.mahasiswas DROP CONSTRAINT mahasiswas_nim_unique;
       public                 postgres    false    231            �           2606    16994    mahasiswas mahasiswas_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.mahasiswas
    ADD CONSTRAINT mahasiswas_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.mahasiswas DROP CONSTRAINT mahasiswas_pkey;
       public                 postgres    false    231            �           2606    17008 /   mata_kuliah mata_kuliah_kode_mata_kuliah_unique 
   CONSTRAINT     v   ALTER TABLE ONLY public.mata_kuliah
    ADD CONSTRAINT mata_kuliah_kode_mata_kuliah_unique UNIQUE (kode_mata_kuliah);
 Y   ALTER TABLE ONLY public.mata_kuliah DROP CONSTRAINT mata_kuliah_kode_mata_kuliah_unique;
       public                 postgres    false    233            �           2606    17006    mata_kuliah mata_kuliah_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.mata_kuliah
    ADD CONSTRAINT mata_kuliah_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.mata_kuliah DROP CONSTRAINT mata_kuliah_pkey;
       public                 postgres    false    233            �           2606    16914    migrations migrations_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.migrations DROP CONSTRAINT migrations_pkey;
       public                 postgres    false    218            �           2606    16932 0   password_reset_tokens password_reset_tokens_pkey 
   CONSTRAINT     q   ALTER TABLE ONLY public.password_reset_tokens
    ADD CONSTRAINT password_reset_tokens_pkey PRIMARY KEY (email);
 Z   ALTER TABLE ONLY public.password_reset_tokens DROP CONSTRAINT password_reset_tokens_pkey;
       public                 postgres    false    221            �           2606    16939    sessions sessions_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.sessions DROP CONSTRAINT sessions_pkey;
       public                 postgres    false    222            �           2606    16925    users users_email_unique 
   CONSTRAINT     T   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_unique UNIQUE (email);
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_unique;
       public                 postgres    false    220            �           2606    16923    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public                 postgres    false    220            �           1259    16965    jobs_queue_index    INDEX     B   CREATE INDEX jobs_queue_index ON public.jobs USING btree (queue);
 $   DROP INDEX public.jobs_queue_index;
       public                 postgres    false    226            �           1259    16941    sessions_last_activity_index    INDEX     Z   CREATE INDEX sessions_last_activity_index ON public.sessions USING btree (last_activity);
 0   DROP INDEX public.sessions_last_activity_index;
       public                 postgres    false    222            �           1259    16940    sessions_user_id_index    INDEX     N   CREATE INDEX sessions_user_id_index ON public.sessions USING btree (user_id);
 *   DROP INDEX public.sessions_user_id_index;
       public                 postgres    false    222            �           2606    17075 /   izin_kehadiran izin_kehadiran_jadwal_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.izin_kehadiran
    ADD CONSTRAINT izin_kehadiran_jadwal_id_foreign FOREIGN KEY (jadwal_id) REFERENCES public.jadwal_perkuliahan(id) ON DELETE CASCADE;
 Y   ALTER TABLE ONLY public.izin_kehadiran DROP CONSTRAINT izin_kehadiran_jadwal_id_foreign;
       public               postgres    false    235    239    4805            �           2606    17070 2   izin_kehadiran izin_kehadiran_mahasiswa_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.izin_kehadiran
    ADD CONSTRAINT izin_kehadiran_mahasiswa_id_foreign FOREIGN KEY (mahasiswa_id) REFERENCES public.mahasiswas(id) ON DELETE CASCADE;
 \   ALTER TABLE ONLY public.izin_kehadiran DROP CONSTRAINT izin_kehadiran_mahasiswa_id_foreign;
       public               postgres    false    239    231    4799            �           2606    17019 <   jadwal_perkuliahan jadwal_perkuliahan_mata_kuliah_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.jadwal_perkuliahan
    ADD CONSTRAINT jadwal_perkuliahan_mata_kuliah_id_foreign FOREIGN KEY (mata_kuliah_id) REFERENCES public.mata_kuliah(id) ON DELETE CASCADE;
 f   ALTER TABLE ONLY public.jadwal_perkuliahan DROP CONSTRAINT jadwal_perkuliahan_mata_kuliah_id_foreign;
       public               postgres    false    235    233    4803            �           2606    17053 %   kehadiran kehadiran_jadwal_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.kehadiran
    ADD CONSTRAINT kehadiran_jadwal_id_foreign FOREIGN KEY (jadwal_id) REFERENCES public.jadwal_perkuliahan(id) ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.kehadiran DROP CONSTRAINT kehadiran_jadwal_id_foreign;
       public               postgres    false    4805    237    235            �           2606    17048 (   kehadiran kehadiran_mahasiswa_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.kehadiran
    ADD CONSTRAINT kehadiran_mahasiswa_id_foreign FOREIGN KEY (mahasiswa_id) REFERENCES public.mahasiswas(id) ON DELETE CASCADE;
 R   ALTER TABLE ONLY public.kehadiran DROP CONSTRAINT kehadiran_mahasiswa_id_foreign;
       public               postgres    false    237    4799    231            �           2606    17218 %   mahasiswas mahasiswas_user_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.mahasiswas
    ADD CONSTRAINT mahasiswas_user_id_foreign FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.mahasiswas DROP CONSTRAINT mahasiswas_user_id_foreign;
       public               postgres    false    4776    220    231            g   ~   x�KL���sH�M���K�ϭ142�3 BC�����"�L+CscS#3ssCkN�+�F��Y�yz)�����9�x�151441�膰	��3BQ�����N�; �&}&8��Z T���� x0S      h      x������ � �      m      x������ � �      w      x������ � �      s   �   x���A
�0���)��ef4&��N�݌P����޿)hR%�E�c�?����~��(.0-�f��11���Yr�sM���gF Q{�K
ˆ�d�D���V�7Z��YX��A���l�V�B��4W%kn�a6��y�o���瓹��F�������'������T�@�&���J�>�X��Ƈ�\OƘ7���      k      x������ � �      j      x������ � �      u   n   x�3�4B�Ĕ�"N##]C#]c+ �&�e�	�!�)��
:0u�ĸ�9�9M8=�2�P��bT�����3$�('17)��h�L����=f��c1�=... r�6      o   �   x�m��j�0��~�I��F��Q�(�����Ӗ����Tz�V����	^����a�u� Y�5���:���cC���STY+�˝c���3�-���ߔC��o-��B�]p�� �!���s��,�f��J��z��4ƹ[{*x��\47�uo�����S�3�c��U
��81P`�Ǿ~�T�W�0��s��.��[��J��,v��|p��B�ZU      q   N  x��TMo�0=�_1�VJ"�~s���&���H�K/Cp�cl��F�����J���a�f���g�ʦbld[l���6��S�%��4���G� +JZT�c�j���
4U�AE{鏇Fm��~p���C���o{ނE�K�lE��Z��X�M|At4����
eh�V�CE3�E���jbx9�%�	�����X�vwK�d[l�^��	jM#���{�����3��oh�)�\�e�'����AT�R�$�W�,K����XLPo]g��#L�0�LK��[�"��J旳X�"�ºs�i���|}t��Q�	���!��5��ް=i�&(P���C(x�c��q�7��9����k���A.!�Ģ�UY���s2D۪��R����-��{eK�[�l�2/�'r#֌n��:�.� s��Id��g��_Y�D&q�ОM�a�l��]�����oiz�{v��1}�(���� ��s?�Wޜ�r�J�]
v��������:�z��#���vg]ܯ�s�0؄��7cQYTV����29�X���L�c|�<�$��
��K���8��*�9��\Q���s��p����u�y��4��      b   �   x�e�[��0��gg1e2�b�R�&`Z[K���O/F��<~����Q�|?��e��cy�S+����V�..��A*�<�ց�"$͊����F���ɘƧM`Vm��ƭz�<�$��k��Q/����1�͕�����K�$��`�/�����_��
~-�{5K������g�n�G��o�)��ݢ8 �qʏ�      e      x������ � �      f   r  x��Rˎ�@]�W��N&6�tz��vQ�"He6<t�(�(�����׮3�I-nrO���9�5�ko^�u&Ņج����
��C����Bŵ#y$��gO��O)��	�=xi�ͅ�N`����µ���ͪ��c�N�'Y�ND�{X�����iv�c����"9���I��<�N�9�5����`#�)yT�="�bR�AM�ԜF}�C�L�^�ŴZ8+�=��D�v�a#ܽ��v��m�����gG�.���(�N�ʢqNo���
t��&Dy�"*�73O�x5S޺���
R�Fti�.��?l�@t/��,MR���8o�|�s��ܷ���{Z5=�e��fDf�Qa�jx�)nz����뽝/3l��'V��M����-��/ �Mlc�C-��7��۩Ց0e�����
��g:٧�fӈ�d*d�4�fZ5ʵ��1"�3�����v��:�g�C9�5��v�c�.0����[���1 $�, ���p�`�M�� ��?���P���d�f��tA�-Ә�Ĵ6L�����X��a@�1�>}�g%��	4���a��?���sVy��s�I��l)�g2�谫Bd?=m^_����y*��N���4UI      d   �  x�u�Oo�@�3~
^����pjE�`�OA�ˀ,2�AA@����X[6�L�y������QvR��ܶ�����Y�EE�|�L��<���ke�@{�g�o���H��k=(�S��;rk1	Q}^5�hF,������'8dyQA#H�Y�w�J����(���/mF{aЄ"Id�uN��A`M��C��r\�B�i��-{3B��UH@A|gvW��K�)���3.����s��4�f�.f#�a�'*��F~k;�N��A
'���m����Hl�5�9���*�x�F,���S�������UR#���S����/�\kI=?�k����DG�㎗q��Kqz�0��HA�#uf��=���[5�m�4��ц�QH.��:h��7u�7�t��<��l�훵5]��r �ӯ&�@RDI���^���q!�2�c�*H��lP������(�x���"�N��7!��!�9b�]V����£����z��oZw��     