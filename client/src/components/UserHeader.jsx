import React, { useEffect, useState } from "react";
import { MapPin, ShieldCheck } from "lucide-react";
import api from "../api/axios";

const UserHeader = ({ user, analiticals, news, position }) => {

    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Cover */}
            <div className=" bg-gray-200">
                {user.cover_photo && (<img src={user.cover_photo} alt="" className="w-full aspect-video object-cover" />)}
            </div>
            {/* Content */}
            <div className="relative px-6 pb-6">
                {/* Avatar */}
                <div className="absolute -top-16 left-6 w-32 h-32 rounded-full border-4 border-white bg-gray-300 overflow-hidden">
                    {user.avatar && (<img src={user.avatar} alt="" className="w-full h-full object-cover" />)}
                </div>
                <div className="pt-20 grid md:grid-cols-3 gap-6">
                    {/* Identity */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3">
                            <h1 className="text-2xl font-semibold text-gray-900">{user.full_name}</h1>
                            {user.isLeader && (<ShieldCheck className="w-5 h-5 text-gray-700" />)}
                        </div>
                        {user.user_name && (<span className="text-sm text-gray-500 mt-1"> (@{user.user_name})</span>)}
                        <p className="text-sm text-gray-500 mt-1">
                            {user.roleOwner !== "user" && (<>Роль у КЗУ: <span className="font-medium">{user.roleOwner === "admin" ? "Адміністратор" : user.roleOwner === "moderator" ? "Модератор" : user.roleOwner === "editor" ? "Редактор" : "Репортер"}</span></>)}
                        </p>
                        <p className="mt-4 text-gray-700 max-w-xl">{user.bio}</p>
                        {user.address?.city && (
                            <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
                                <MapPin className="w-4 h-4" />
                                {user.address.city}, {user.address.country}
                            </div>
                        )}
                    </div>

                    {/* Contribution */}
                    <div className="border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-6">
                        <p className="text-xs uppercase tracking-wide text-gray-400">Внесок у спільноту</p>
                        <div className="mt-4 space-y-3 text-sm">
                            <div>Аналітика:{" "}<span className="font-medium">{analiticals.length}</span></div>
                            <div>Новини:{" "}<span className="font-medium">{news.length}</span></div>
                            <div>Позиції:{" "}<span className="font-medium">{position.length}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHeader;
