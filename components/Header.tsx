"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Header(){

    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e) => {
    e.preventDefault();
    // Redirect to search results page with query param
    if (query.trim()) {
        router.push(`/search?query=${encodeURIComponent(query)}`);
    }
};

    return(
        <header style={{display:'flex', alignItems:'center',justifyContent:'space-between', padding:'12px 24px', background:'#fff'}}>
            <div className="brand"><h1 style={{fontWeight:'bold'}}>ShopZ</h1></div>
        <div style={{width:'60%', height:'38px', display:'flex', alignItems:'center', gap:'8px', padding:'0 12px', background:'#f2f2f2', borderRadius:'20px'}}>
            <form onSubmit={handleSearch} >
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-input"
            />
            <button type="submit" className="search-button">Go</button>
            </form>
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'20px', cursor:'pointer'}}>
            <div><h1 style={{fontWeight:'bold'}}>Cart</h1></div>
            <div><h1 style={{fontWeight:'bold'}}>Login</h1></div>
        </div>
        </header>
    );
}
