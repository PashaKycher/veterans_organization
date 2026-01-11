import React from "react";
import { useLocation } from "react-router-dom";

const SupportPage = () => {
    const query = new URLSearchParams(useLocation().search);
    const mode = query.get("mode") || "support"; // support | partner

    const isPartner = mode === "partner";

    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            {/* HERO */}
            <div className="mb-16 border-b border-neutral-200 pb-10 pt-18">
                <h1 className="text-3xl md:text-4xl font-semibold text-title mb-4">
                    {isPartner ? "Стати партнером" : "Підтримати проєкти"}
                </h1>
                <p className="max-w-3xl text-text leading-relaxed opacity-80">
                    {isPartner
                        ? "Партнерство — це участь у формуванні нової культури відповідальності та дії."
                        : "Фінансова підтримка — це внесок у незалежну аналітику та ветеранську спільноту."}
                </p>
            </div>

            {/* CONTENT */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* MAIN */}
                <div className="lg:col-span-2 space-y-10">
                    <section>
                        <h2 className="text-xl font-semibold mb-4">
                            {isPartner ? "Формати партнерства" : "На що спрямовується підтримка"}
                        </h2>
                        <div className="bg-white border border-neutral-200 rounded-xl p-8 text-sm leading-relaxed space-y-3">
                            <p>— Блок для детального опису напрямів</p>
                            <p>— Місце для принципів прозорості</p>
                            <p>— Логіка використання ресурсів</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">
                            {isPartner ? "Умови співпраці" : "Реквізити для підтримки"}
                        </h2>
                        <div className="bg-white border border-neutral-200 rounded-xl p-8 space-y-4">
                            <div className="h-6 bg-neutral-100 rounded w-3/4"></div>
                            <div className="h-6 bg-neutral-100 rounded w-1/2"></div>
                            <div className="h-6 bg-neutral-100 rounded w-2/3"></div>
                        </div>
                    </section>
                </div>

                {/* SIDEBAR */}
                <aside className="space-y-8">
                    <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                        <h3 className="font-semibold mb-3">
                            Принципи
                        </h3>
                        <ul className="text-sm leading-relaxed opacity-80 space-y-2">
                            <li>• Прозорість</li>
                            <li>• Публічна відповідальність</li>
                            <li>• Довгострокове мислення</li>
                        </ul>
                    </div>

                    <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                        <h3 className="font-semibold mb-3">
                            Контакт для взаємодії
                        </h3>
                        <p className="text-sm opacity-80">
                            Тут буде відповідальна контактна інформація
                        </p>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default SupportPage;
