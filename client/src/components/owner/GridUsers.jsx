import React, { useEffect, useMemo, useState } from "react";
import api from "../../api/axios";
import UserCard from "./UserCard";

const GridUsers = ({ filters }) => {
    const [users, setUsers] = useState([]);
    const [open, setOpen] = useState({
        leaders: true,
        club: false,
        all: false
    });

    const fetchUsers = async () => {
        const { data } = await api.get("/api/users/users");
        if (data.success) setUsers(data.users);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const filtered = useMemo(() => {
        let items = [...users];

        if (filters.sort === "az") { items.sort((a, b) => a.full_name.localeCompare(b.full_name)); }
        if (filters.sort === "za") { items.sort((a, b) => b.full_name.localeCompare(a.full_name)); }
        if (filters.search) {
            const sear = filters.search.toLowerCase();
            items = items.filter(item => item.full_name?.toLowerCase().includes(sear) || item.user_name?.toLowerCase().includes(sear) || item.email?.toLowerCase().includes(sear));
        }

        return items;
    }, [users, filters]);

    const leaders = filtered.filter(u => u.isLeader);
    const club = filtered.filter(u => u.isClubLeader);

    return (
        <section className="px-6 md:px-16 lg:px-24 xl:px-40 py-12 space-y-10">

            {/* ЛІДЕРИ */}
            <button onClick={() => setOpen(o => ({ ...o, leaders: !o.leaders }))}>
                {open.leaders ? "▾" : "▸"} Лідери
            </button>
            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-10">
                {open.leaders && leaders.map(u => <UserCard key={u._id} user={u} refresh={fetchUsers} />)}
            </div>
            <div className="my-10 py-0.5 bg-primary"></div>
            {/* УЧАСНИКИ */}
            <button onClick={() => setOpen(o => ({ ...o, club: !o.club }))}>
                {open.club ? "▾" : "▸"} Учасники Клубу
            </button>
            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-10">
                {open.club && club.map(u => <UserCard key={u._id} user={u} refresh={fetchUsers} />)}
            </div>
            <div className="my-10 py-0.5 bg-primary"></div>
            {/* ВСІ */}
            <button onClick={() => setOpen(o => ({ ...o, all: !o.all }))}>
                {open.all ? "▾" : "▸"} Усі користувачі
            </button>
            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-10">
                {open.all && filtered.map(u => <UserCard key={u._id} user={u} refresh={fetchUsers} />)}
            </div>

        </section>
    );
};

export default GridUsers;
