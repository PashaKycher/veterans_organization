import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useSelector } from "react-redux";

const FormClub = () => {
    const [state, handleSubmit] = useForm("xreeezkj");
    const user = useSelector(state => state.user.user);

    if (state.succeeded) {
        return (
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 text-center">
                <h3 className="mb-16 border-b border-neutral-200 pb-10 pt-18">Заявку надіслано</h3>
                <p className="text-sm text-text opacity-80">Ми розглянемо її та звʼяжемося з вами, якщо побачимо відповідність принципам Клубу.</p>
            </div>
        );
    }

    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            <div className="mb-16 border-b border-neutral-200 pb-10 pt-18">
                <h1 className="text-3xl md:text-4xl font-semibold text-title mb-4">Подати заявку до Клубу</h1>
                <p className="max-w-3xl text-text leading-relaxed opacity-80">Клуб — це не спільнота за інтересами, а середовище відповідальних людей дії. Заповнюючи форму, ви заявляєте готовність до участі.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden meta */}
                <input type="hidden" name="form_type" value="club_application" />
                <input type="hidden" name="user_name" value={user?.name || ""} />
                <input type="hidden" name="user_email" value={user?.email || ""} />
                {/* Full name */}
                <div>
                    <label className="block text-sm font-medium mb-1">Імʼя та прізвище</label>
                    <input type="text" name="full_name" defaultValue={user?.name || ""} required className="w-full px-4 py-2 border rounded-lg" />
                </div>
                {/* Email */}
                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" name="email" defaultValue={user?.email || ""} required className="w-full px-4 py-2 border rounded-lg" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                {/* Role */}
                <div>
                    <label className="block text-sm font-medium mb-1">Ваша роль</label>
                    <select name="role" required className="w-full px-4 py-2 border rounded-lg">
                        <option value="">Оберіть</option>
                        <option value="military">Військовослужбовець</option>
                        <option value="veteran">Ветеран</option>
                        <option value="civil_leader">Цивільний лідер / експерт</option>
                    </select>
                </div>
                {/* Motivation */}
                <div>
                    <label className="block text-sm font-medium mb-1">Чому ви хочете долучитися</label>
                    <textarea name="message" rows={6} required className="w-full px-4 py-2 border rounded-lg resize-none" placeholder="Коротко про вашу мотивацію та досвід" />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button type="submit" disabled={state.submitting} className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl font-medium text-white bg-linear-to-r from-emerald-600 to-emerald-800 hover:from-emerald-700 hover:to-emerald-900 transition active:scale-[0.97]">Подати заявку</button>
            </form>
        </section>
    );
};

export default FormClub;