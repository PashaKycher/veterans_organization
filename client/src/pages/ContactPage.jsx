import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactPage = () => {
    const [state, handleSubmit] = useForm("mpqqanvq");

    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            {/* HERO */}
            <div className="mb-16 border-b border-neutral-200 pb-10 pt-18">
                <h1 className="text-3xl md:text-4xl font-semibold text-title mb-4">
                    Звʼяжіться з нами
                </h1>
                <p className="max-w-3xl text-text leading-relaxed opacity-80">
                    Ми відкриті до взаємодії з тими, хто поділяє принципи відповідальності,
                    державного мислення та дії. Запит — це початок розмови.
                </p>
            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* LEFT: CONTACT FORM */}
                <div className="lg:col-span-2">
                    <h2 className="text-xl font-semibold mb-6">
                        Форма звернення
                    </h2>

                    <div className="bg-white border border-neutral-200 rounded-xl p-8">
                        {state.succeeded ? (
                            <div className="p-6 rounded-lg bg-emerald-50 border border-emerald-200">
                                <h3 className="font-semibold text-emerald-700 mb-2">
                                    Запит надіслано
                                </h3>
                                <p className="text-sm text-emerald-700 opacity-80">
                                    Дякуємо. Ми розглянемо ваше звернення та звʼяжемося з вами.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">Імʼя та прізвище</label>
                                    <input type="text" name="name" required placeholder="Ваше імʼя" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring" />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">Email</label>
                                    <input type="email" name="email" required placeholder="email@example.com" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring" />

                                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-600 mt-1" />
                                </div>

                                {/* Topic */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Тема звернення
                                    </label>
                                    <select name="topic" className="w-full px-4 py-2 border rounded-lg">
                                        <option value="Партнерство">Партнерство</option>
                                        <option value="Експертна співпраця">Експертна співпраця</option>
                                        <option value="Підтримка платформи">Підтримка платформи</option>
                                        <option value="Інше">Інше</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Повідомлення
                                    </label>
                                    <textarea rows={6} name="message" required placeholder="Суть вашого запиту" className="w-full px-4 py-2 border rounded-lg resize-none" />

                                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-600 mt-1" />
                                </div>

                                <button type="submit" disabled={state.submitting} className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-medium text-white bg-linear-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed">
                                    {state.submitting ? "Надсилання..." : "Надіслати запит"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* RIGHT: INFO */}
                <aside className="space-y-8">
                    <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                        <h3 className="font-semibold mb-3">Для кого ця платформа</h3>
                        <p className="text-sm leading-relaxed opacity-80">
                            Лідери, ветерани, аналітики, ініціативи та партнери,
                            які працюють з майбутнім оборонної держави.
                        </p>
                    </div>
                    <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                        <h3 className="font-semibold mb-3">Принцип взаємодії</h3>
                        <p className="text-sm leading-relaxed opacity-80">
                            Ми відповідаємо на запити, що мають зміст,
                            відповідальність та довгострокову перспективу.
                        </p>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default ContactPage;

