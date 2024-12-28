import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/inertia-react';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
        nim: user.mahasiswa ? user.mahasiswa.nim : '',
        jenis_kelamin: user.mahasiswa ? user.mahasiswa.jenis_kelamin : '',
        tgl_lahir: user.mahasiswa ? user.mahasiswa.tgl_lahir : '',
        alamat: user.mahasiswa ? user.mahasiswa.alamat : '',
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('profile.update'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Profile Information
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                {/* Form menggunakan grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <InputLabel htmlFor="name" value="Name" />
                        <TextInput
                            id="name"
                            className="mt-1 block w-full"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            autoComplete="name"
                        />
                        <InputError className="mt-2" message={errors.name} />
                    </div>

                    <div>
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            className="mt-1 block w-full"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                            autoComplete="username"
                        />
                        <InputError className="mt-2" message={errors.email} />
                    </div>

                    <div>
                        <InputLabel htmlFor="nim" value="NIM" />
                        <TextInput
                            id="nim"
                            type="text"
                            className="mt-1 block w-full"
                            value={data.nim}
                            onChange={(e) => setData('nim', e.target.value)}
                            required
                            autoComplete="nim"
                        />
                        <InputError className="mt-2" message={errors.nim} />
                    </div>

                    <div>
                        <InputLabel htmlFor="jenis_kelamin" value="Gender" />
                        <TextInput
                            id="jenis_kelamin"
                            type="text"
                            className="mt-1 block w-full"
                            value={data.jenis_kelamin}
                            onChange={(e) =>
                                setData('jenis_kelamin', e.target.value)
                            }
                            required
                            autoComplete="jenis_kelamin"
                        />
                        <InputError
                            className="mt-2"
                            message={errors.jenis_kelamin}
                        />
                    </div>

                    <div>
                        <InputLabel htmlFor="tgl_lahir" value="Date of Birth" />
                        <TextInput
                            id="tgl_lahir"
                            type="date"
                            className="mt-1 block w-full"
                            value={data.tgl_lahir}
                            onChange={(e) => setData('tgl_lahir', e.target.value)}
                            required
                            autoComplete="bdate"
                        />
                        <InputError className="mt-2" message={errors.tgl_lahir} />
                    </div>

                    <div>
                        <InputLabel htmlFor="alamat" value="Address" />
                        <TextInput
                            id="alamat"
                            type="text"
                            className="mt-1 block w-full"
                            value={data.alamat}
                            onChange={(e) => setData('alamat', e.target.value)}
                            required
                            autoComplete="address"
                        />
                        <InputError className="mt-2" message={errors.alamat} />
                    </div>
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800">
                            Your email address is unverified.{' '}
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="text-indigo-600 underline"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>
                        {status === 'verification-link-sent' && (
                            <p className="mt-2 text-sm text-green-600">
                                A new verification link has been sent to your email address.
                            </p>
                        )}
                    </div>
                )}

                <div className="flex items-center justify-end gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>
                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition ease-in-out duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
