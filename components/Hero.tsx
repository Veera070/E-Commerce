"use client";
import { useState } from "react";

export default function MultipleDropdowns() {
const Latest = [
    { value: '', label: 'Latest Collection' },
    { value: 'footwear', label: 'Footwears' },
    { value: 'accessories', label: 'Accessories' },
    { value: 'bags', label: 'Bags' },
];

const Best = [
    { value: '', label: 'Best' },
    { value: 'best-sellers', label: 'Best Sellers' },
    { value: 'top-rated', label: 'Top Rated' },
    { value: 'popular', label: 'Popular' },
];

const Style = [
    { value: '', label: 'Style' },
    { value: 'casual', label: 'Casual' },
    { value: 'formal', label: 'Formal' },
    { value: 'sport', label: 'Sport' },
];

const Men = [
    { value: '', label: 'Men' },
    { value: 'shirts', label: 'Shirts' },
    { value: 'pants', label: 'Pants' },
    { value: 'jackets', label: 'Jackets' },
];


const [selectedLatest, setSelectedLatest] = useState('');
const [selectedBest, setSelectedBest] = useState('');
const [selectedStyle, setSelectedStyle] = useState('');
const [selectedMen, setSelectedMen] = useState('');

return (
<div className="hero">
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap',justifyContent:'center',paddingTop:'20px'}}>
    <div style={{margin:"0px",border:'0px'}}>
            <select
                value={selectedLatest}
                onChange={(e) => setSelectedLatest(e.target.value)}
            >
            {Latest.map(({ value, label }) => (
                <option key={value} value={value}>
                    {label}
                </option>
            ))}
            </select>
    </div>

    <div>
            <select
                value={selectedBest}
                onChange={(e) => setSelectedBest(e.target.value)}
            >
            {Best.map(({ value, label }) => (
                <option key={value} value={value}>
                    {label}
                </option>
                ))}
            </select>
    
    </div>

    <div>
            <select
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
            >
            {Style.map(({ value, label }) => (
                <option key={value} value={value}>
                    {label}
                </option>
                ))}
            </select>

    </div>

    <div>
            <select
                value={selectedMen}
                onChange={(e) => setSelectedMen(e.target.value)}
        >
        {Men.map(({ value, label }) => (
                <option key={value} value={value}>
                    {label}
                </option>
                ))}
            </select>
    </div>
    </div>
        <div className="hero-content">
            <h1>ShopZ.co</h1>
            <p>SHopZ.co offers trendy,high quality fashion at affordable<br/>price,perfect for any occasion and style</p>
        <div className="btn-group" >
            <button className="btn-primary">Shop Now</button>
            <button className="btn-secondary">Learn More</button>
        </div>
        </div>

        
        <div className="flash-sale-bar">
            <p> 2025 Flash Sale</p>
            <p> 12.00pm</p>
            <p> 2025 Flash Sale</p>
            <p> 12.00pm</p>
            <p> 2025 Flash Sale</p>
            <p> 12.00pm</p>
            <p> 2025 Flash Sale</p>
            <p> 12.00pm</p>
            <p> 2025 Flash Sale</p>
            <p> 12.00pm</p>
            <p> 2025 Flash Sale</p>
        
        </div>
        
    </div>
);
}
