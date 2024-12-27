import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
// import { Link } from '@inertiajs/inertia-react';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
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
                <div>
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

                <div className="mt-4">
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

                <div>
                    <InputLabel htmlFor="nim" value="nim" />

                    <TextInput
                        id="nim"
                        name="nim"
                        value={data.nim}
                        className="mt-1 block w-full"
                        autoComplete="nim"
                        isFocused={true}
                        onChange={(e) => setData('nim', e.target.value)}
                        
                    />
                    <InputError message={errors.nim} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="jenis_kelamin" value="jenis_kelamin" />
                    <TextInput
                        id="jenis_kelamin"
                        name="jenis_kelamin"
                        value={data.jenis_kelamin}
                        className="mt-1 block w-full"
                        autoComplete="jenis_kelamin"
                        isFocused={true}
                        onChange={(e) => setData('jenis_kelamin', e.target.value)}
                        
                    />
                    <InputError message={errors.jenis_kelamin} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="tgl_lahir" value="Tanggal Lahir" />
                    <TextInput
                        id="tgl_lahir"
                        name="tgl_lahir"
                        value={data.tgl_lahir}
                        className="mt-1 block w-full"
                        autoComplete="bdate"  // Optional, untuk membantu dengan autocomplete
                        isFocused={true}
                        type="date"  // Menggunakan tipe 'date' untuk memilih tanggal
                        onChange={(e) => setData('tgl_lahir', e.target.value)}  // Mengupdate data saat berubah
                    />
                    <InputError message={errors.tgl_lahir} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="alamat" value="Alamat" />
                    <textarea
                        id="alamat"
                        name="alamat"
                        value={data.alamat}
                        className="mt-1 block w-full"
                        autoComplete="street-address"  // Optional, untuk membantu dengan autocomplete alamat
                        isFocused={true}
                        onChange={(e) => setData('alamat', e.target.value)}  // Mengupdate data alamat saat berubah
                    />
                    <InputError message={errors.alamat} className="mt-2" />
                </div>



                <div className="mt-4">
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

                <div className="mt-4">
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
