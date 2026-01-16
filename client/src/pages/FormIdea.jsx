import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useSelector } from "react-redux";

const FormIdea = () => {
    const [state, handleSubmit] = useForm("mlgggrld");
    const user = useSelector(state => state.user.user);

    if (state.succeeded) {
        return (
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 text-center">
                <h3 className="mb-16 border-b border-neutral-200 pb-10 pt-18">Ідею надіслано</h3>
                <p className="text-sm text-text opacity-80">
                    Ми розглянемо пропозицію та повернемося з відповіддю,
                    якщо побачимо потенціал для реалізації.
                </p>
            </div>
        );
    }

    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            <div className="mb-16 border-b border-neutral-200 pb-10 pt-18">
                <h1 className="text-3xl md:text-4xl font-semibold text-title mb-4">Запропонувати ідею</h1>
                <p className="max-w-3xl text-text leading-relaxed opacity-80">Клуб відкритий до ідей, що посилюють оборонну націю, відповідальність та державне мислення.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden meta */}
                <input type="hidden" name="form_type" value="idea_proposal" />
                <input type="hidden" name="user_name" value={user?.name || ""} />
                <input type="hidden" name="user_email" value={user?.email || ""} />
                <div>
                    <label className="block text-sm font-medium mb-1">Імʼя та прізвище</label>
                    <input type="text" name="full_name" defaultValue={user?.name || ""} required className="w-full px-4 py-2 border rounded-lg"/>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" name="email" defaultValue={user?.email || ""} required className="w-full px-4 py-2 border rounded-lg"/>
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Тип ідеї</label>
                    <select name="idea_type" required className="w-full px-4 py-2 border rounded-lg">
                        <option value="">Оберіть</option>
                        <option value="analytics">Аналітичний матеріал</option>
                        <option value="initiative">Ініціатива / проєкт</option>
                        <option value="product">Продукт / сервіс</option>
                        <option value="other">Інше</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Опис ідеї</label>
                    <textarea name="message" rows={7} required className="w-full px-4 py-2 border rounded-lg resize-none" placeholder="Суть ідеї, ціль, користь для спільноти або держави"/>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button type="submit" disabled={state.submitting} className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl font-medium text-white bg-linear-to-r from-emerald-600 to-emerald-800 hover:from-emerald-700 hover:to-emerald-900 transition active:scale-[0.97]">Надіслати ідею</button>
            </form>
        </section>
    );
};

export default FormIdea;