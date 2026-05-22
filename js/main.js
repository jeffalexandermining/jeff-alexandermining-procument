// main.js - Jeff Alexander International Limited - Mining Company
// Procurement and Tenders 2026

// ============================================
// COMPANY CONFIGURATION - JEFF ALEXANDER INTERNATIONAL
// ============================================
const COMPANY_CONFIG = {
    name: "JEFF ALEXANDER INTERNATIONAL LIMITED",
    licence: "Small-Scale Mining Licence No. 8002-HQ-SML",
    location: "Mufumbwe District, North-Western Province, Zambia",
    email: "procurement@jeffalexander.co.zm",
    phone: "+260 97 123 4567",  // Update with actual number
    altPhone: "+260 96 765 4321",
    physicalAddress: "Mufumbwe District, North-Western Province, Zambia (Near Mufumbwe Boma)",
    logoPath: "assets/logo.png",
    postalAddress: "PO Box 123, Mufumbwe, Zambia"
};

// ============================================
// DISPLAY COMPANY INFORMATION
// ============================================
function displayCompanyInfo() {
    document.getElementById('companyName').textContent = COMPANY_CONFIG.name;
    document.getElementById('companyLicence').textContent = COMPANY_CONFIG.licence;
    document.getElementById('companyLocation').innerHTML = `📍 ${COMPANY_CONFIG.location}`;
    
    const logoImg = document.getElementById('companyLogo');
    if (logoImg) {
        logoImg.src = COMPANY_CONFIG.logoPath;
        logoImg.alt = `${COMPANY_CONFIG.name} Logo`;
        logoImg.onerror = function() {
            console.warn("Logo not found - continuing without logo");
            const logoArea = document.querySelector('.logo-area');
            if (logoArea) logoArea.style.display = 'none';
        };
    }
}

// ============================================
// SET HONEST PUBLICATION DATE (TODAY'S DATE)
// ============================================
const pubDateElem = document.getElementById('publicationdate');

window.addEventListener('DOMContentLoaded', () => {
    // Fixed: Changed 'publicationdate' to 'publicationDate' to match your HTML
    const pubDateElem = document.getElementById('publicationDate'); 
    
    if (pubDateElem) {
        const specificDate = new Date(2026, 0, 15); 
        
        const formattedDate = specificDate.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
        const timeStr = specificDate.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
        
        pubDateElem.innerHTML = `📅 <strong>Official Publication Date:</strong> ${formattedDate} at ${timeStr}<br>✅ This document is published in compliance with Zambia <strong>Local Content SI 68 of 2026</strong>.`;
    }
});



// ============================================
// PROCUREMENT PLAN DATA (Mining-specific)
// ============================================
const procurementData = [
    { category: "Mining Equipment", description: "Excavators, loaders, dump trucks, drilling rigs", quarter: "Q1, Q3", method: "Open International / Local" },
    { category: "Consumables", description: "Explosives, fuels, lubricants, grinding media", quarter: "All Quarters", method: "Framework Agreements" },
    { category: "Safety & PPE", description: "Helmets, boots, respirators, first aid equipment", quarter: "Q1, Q2, Q4", method: "Local Suppliers" },
    { category: "Mining Services", description: "Assaying, geotechnical surveys, security, catering", quarter: "Q1, Q3, Q4", method: "RFQ / RFP" },
    { category: "Infrastructure", description: "Camp maintenance, road repairs, water systems", quarter: "Q2, Q3", method: "Local Contractors" },
    { category: "Local Content", description: "Preference to Zambian-owned businesses", quarter: "All Quarters", method: "Restricted to Local" }
];

function buildProcurementTable() {
    const table = document.getElementById('procurementTable');
    let html = `<thead><tr><th>Category</th><th>Description</th><th>Expected Quarter</th><th>Procurement Method</th></tr></thead><tbody>`;
    procurementData.forEach(item => {
        html += `<tr>
                    <td><strong>${item.category}</strong></td>
                    <td>${item.description}</td>
                    <td>${item.quarter}</td>
                    <td>${item.method}</td>
                 </tr>`;
    });
    html += `</tbody>`;
    table.innerHTML = html;
}

// ============================================
// COMPLETED/Q1 TENDERS DATA
// ============================================
const tendersData = [
    { ref: "JA/GOODS/01/2026", description: "Supply of 5,000L diesel and lubricants", closing: "10 Feb 2026", status: "Closed – Awarded to Mufumbwe Petroleum" },
    { ref: "JA/PPE/02/2026", description: "Personal Protective Equipment (500 units)", closing: "20 Feb 2026", status: "Closed – Awarded to Zambian Safety Supplies" },
    { ref: "JA/SERV/03/2026", description: "Site security services (12-month contract)", closing: "05 Mar 2026", status: "Closed – Evaluation in progress" },
    { ref: "JA/EQUIP/04/2026", description: "Second-hand excavator (20-ton class)", closing: "15 Mar 2026", status: "Closed – Awaiting delivery" },
    { ref: "JA/LC/05/2026", description: "Local catering services for mining camp", closing: "25 Mar 2026", status: "Closed – Awarded to local caterer" }
];

function buildTendersTable() {
    const table = document.getElementById('tendersTable');
    let html = `<thead><tr><th>Tender Reference</th><th>Description</th><th>Closing Date</th><th>Status</th></tr></thead><tbody>`;
    tendersData.forEach(tender => {
        html += `<tr>
                    <td>${tender.ref}</td>
                    <td>${tender.description}</td>
                    <td>${tender.closing}</td>
                    <td>${tender.status}</td>
                 </tr>`;
    });
    html += `</tbody>`;
    table.innerHTML = html;
}

// ============================================
// UPCOMING TENDERS (Q2-Q3 2026)
// ============================================
const upcomingData = [
    { ref: "JA/EQUIP/06/2026", description: "Dump truck (30-ton capacity)", opening: "June 2026", deadline: "July 2026", estValue: "Local Only" },
    { ref: "JA/CONS/07/2026", description: "Explosives (ANFO) supply contract", opening: "June 2026", deadline: "July 2026", estValue: "Approved Suppliers" },
    { ref: "JA/WORKS/08/2026", description: "Access road grading & maintenance", opening: "July 2026", deadline: "August 2026", estValue: "Zambian Contractors" },
    { ref: "JA/SERV/09/2026", description: "Geological consultancy services", opening: "August 2026", deadline: "September 2026", estValue: "Open" }
];

function buildUpcomingTable() {
    const table = document.getElementById('upcomingTable');
    if (table) {
        let html = `<thead><tr><th>Tender Reference</th><th>Description</th><th>Opening Date</th><th>Deadline</th><th>Eligibility</th></tr></thead><tbody>`;
        upcomingData.forEach(item => {
            html += `<tr>
                        <td>${item.ref}</td>
                        <td>${item.description}</td>
                        <td>${item.opening}</td>
                        <td>${item.deadline}</td>
                        <td>${item.estValue}</td>
                     </tr>`;
        });
        html += `</tbody>`;
        table.innerHTML = html;
    }
}

// ============================================
// FOOTER WITH COMPANY CONTACT INFO
// ============================================
function setFooter() {
    const footer = document.getElementById('footerContact');
    footer.innerHTML = `
        <p>⛏️ <strong>${COMPANY_CONFIG.name}</strong> | ${COMPANY_CONFIG.licence}</p>
        <p>📍 ${COMPANY_CONFIG.physicalAddress}</p>
        <p>📧 Procurement: <strong>${COMPANY_CONFIG.email}</strong> | 📞 ${COMPANY_CONFIG.phone} / ${COMPANY_CONFIG.altPhone}</p>
        <p>📮 ${COMPANY_CONFIG.postalAddress}</p>
        <p>© 2026 ${COMPANY_CONFIG.name} – Committed to Local Content Compliance (SI 68)</p>
    `;
}

// ============================================
// INITIALIZE EVERYTHING
// ============================================
displayCompanyInfo();
buildProcurementTable();
buildTendersTable();
buildUpcomingTable();
setFooter();