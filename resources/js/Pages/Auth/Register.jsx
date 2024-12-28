import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        nim: '',
        jenis_kelamin: '',
        tgl_lahir: '',
        alamat: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <form onSubmit={submit}>
                {/* Baris pertama */}
                <div className="flex gap-4">
                    <div className="flex-1">
                        <InputLabel htmlFor="name" value="Name" />
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="flex-1">
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>
                </div>

                {/* Baris kedua */}
                <div className="flex gap-4 mt-4">
                    <div className="flex-1">
                        <InputLabel htmlFor="nim" value="NIM" />
                        <TextInput
                            id="nim"
                            name="nim"
                            value={data.nim}
                            className="mt-1 block w-full"
                            autoComplete="nim"
                            onChange={(e) => setData('nim', e.target.value)}
                        />
                        <InputError message={errors.nim} className="mt-2" />
                    </div>

                    <div className="flex-1">
                        <InputLabel htmlFor="jenis_kelamin" value="Jenis Kelamin" />
                        <TextInput
                            id="jenis_kelamin"
                            name="jenis_kelamin"
                            value={data.jenis_kelamin}
                            className="mt-1 block w-full"
                            autoComplete="jenis_kelamin"
                            onChange={(e) => setData('jenis_kelamin', e.target.value)}
                        />
                        <InputError message={errors.jenis_kelamin} className="mt-2" />
                    </div>
                </div>

                {/* Baris ketiga */}
                <div className="flex gap-4 mt-4">
                    <div className="flex-1">
                        <InputLabel htmlFor="tgl_lahir" value="Tanggal Lahir" />
                        <TextInput
                            id="tgl_lahir"
                            type="date"
                            name="tgl_lahir"
                            value={data.tgl_lahir}
                            className="mt-1 block w-full"
                            autoComplete="bdate"
                            onChange={(e) => setData('tgl_lahir', e.target.value)}
                        />
                        <InputError message={errors.tgl_lahir} className="mt-2" />
                    </div>
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="alamat" value="Alamat" />
                    <textarea
                        id="alamat"
                        name="alamat"
                        value={data.alamat}
                        className="mt-1 block w-full"
                        autoComplete="street-address"
                        onChange={(e) => setData('alamat', e.target.value)}
                    />
                    <InputError message={errors.alamat} className="mt-2" />
                </div>
                {/* Baris keempat */}
                <div className="flex gap-4 mt-4">
                    <div className="flex-1">
                        <InputLabel htmlFor="password" value="Password" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="flex-1">
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Confirm Password"
                        />
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData('password_confirmation', e.target.value)
                            }
                            required
                        />
                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>
                </div>

                {/* Tombol */}
                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route('login')}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
