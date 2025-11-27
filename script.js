// ============================================
// DATA STRUCTURE & STATE MANAGEMENT
// ============================================

let editingMonthKey = null;

let plantData = {
    ep1: [
        // Sample values for Jan-Dec 2025 (EP1)
        { year: 2025, month: 1, grn: 200000, import: 140000, dispatched: 152251, export: 30846, wasteCusde: 14922, wasteAct: 28000, enabled: true },
        { year: 2025, month: 2, grn: 130000, import: 130000, dispatched: 120944, export: 40975, wasteCusde: 3000, wasteAct: 15000, enabled: true },
        { year: 2025, month: 3, grn: 180000, import: 120000, dispatched: 135000, export: 25000, wasteCusde: 12000, wasteAct: 18000, enabled: true },
        { year: 2025, month: 4, grn: 220000, import: 150000, dispatched: 160000, export: 35000, wasteCusde: 15000, wasteAct: 22000, enabled: true },
        { year: 2025, month: 5, grn: 195000, import: 135000, dispatched: 145000, export: 28000, wasteCusde: 13500, wasteAct: 20000, enabled: true },
        { year: 2025, month: 6, grn: 205000, import: 138000, dispatched: 150000, export: 30000, wasteCusde: 14000, wasteAct: 21000, enabled: true },
        { year: 2025, month: 7, grn: 215000, import: 142000, dispatched: 155000, export: 32000, wasteCusde: 14500, wasteAct: 21500, enabled: true },
        { year: 2025, month: 8, grn: 190000, import: 130000, dispatched: 140000, export: 26000, wasteCusde: 12500, wasteAct: 19000, enabled: true },
        { year: 2025, month: 9, grn: 210000, import: 145000, dispatched: 162000, export: 34000, wasteCusde: 14800, wasteAct: 22000, enabled: true },
        { year: 2025, month: 10, grn: 230000, import: 155000, dispatched: 170000, export: 36000, wasteCusde: 15000, wasteAct: 23000, enabled: true },
        { year: 2025, month: 11, grn: 225000, import: 150000, dispatched: 168000, export: 35000, wasteCusde: 14850, wasteAct: 22500, enabled: true },
        { year: 2025, month: 12, grn: 240000, import: 160000, dispatched: 180000, export: 38000, wasteCusde: 16000, wasteAct: 24000, enabled: true }
    ],
    ep2: [
        // Sample values for Jan-Dec 2025 (EP2)
        { year: 2025, month: 1, grn: 180000, import: 90000, dispatched: 140000, export: 25000, wasteCusde: 10000, wasteAct: 15000, enabled: true },
        { year: 2025, month: 2, grn: 160000, import: 95000, dispatched: 130000, export: 20000, wasteCusde: 8000, wasteAct: 12000, enabled: true },
        { year: 2025, month: 3, grn: 190000, import: 100000, dispatched: 150000, export: 22000, wasteCusde: 11000, wasteAct: 16000, enabled: true },
        { year: 2025, month: 4, grn: 210000, import: 110000, dispatched: 165000, export: 28000, wasteCusde: 12000, wasteAct: 18000, enabled: true },
        { year: 2025, month: 5, grn: 175000, import: 88000, dispatched: 138000, export: 23000, wasteCusde: 9500, wasteAct: 14000, enabled: true },
        { year: 2025, month: 6, grn: 185000, import: 92000, dispatched: 145000, export: 24000, wasteCusde: 10500, wasteAct: 15000, enabled: true },
        { year: 2025, month: 7, grn: 195000, import: 98000, dispatched: 152000, export: 26000, wasteCusde: 11500, wasteAct: 16000, enabled: true },
        { year: 2025, month: 8, grn: 170000, import: 87000, dispatched: 132000, export: 22000, wasteCusde: 9200, wasteAct: 13000, enabled: true },
        { year: 2025, month: 9, grn: 200000, import: 105000, dispatched: 160000, export: 28000, wasteCusde: 12500, wasteAct: 17000, enabled: true },
        { year: 2025, month: 10, grn: 205000, import: 108000, dispatched: 165000, export: 29000, wasteCusde: 12800, wasteAct: 17500, enabled: true },
        { year: 2025, month: 11, grn: 198000, import: 102000, dispatched: 158000, export: 27500, wasteCusde: 12200, wasteAct: 16800, enabled: true },
        { year: 2025, month: 12, grn: 210000, import: 110000, dispatched: 170000, export: 30000, wasteCusde: 13500, wasteAct: 18000, enabled: true }
    ],
    cp: [
        // Sample values for Jan-Dec 2025 (CP)
        { year: 2025, month: 1, grn: 150000, import: 80000, dispatched: 120000, export: 18000, wasteCusde: 8000, wasteAct: 12000, enabled: true },
        { year: 2025, month: 2, grn: 140000, import: 75000, dispatched: 115000, export: 16000, wasteCusde: 7000, wasteAct: 11000, enabled: true },
        { year: 2025, month: 3, grn: 165000, import: 85000, dispatched: 130000, export: 20000, wasteCusde: 9000, wasteAct: 13000, enabled: true },
        { year: 2025, month: 4, grn: 185000, import: 95000, dispatched: 145000, export: 22000, wasteCusde: 10000, wasteAct: 15000, enabled: true },
        { year: 2025, month: 5, grn: 155000, import: 78000, dispatched: 125000, export: 19000, wasteCusde: 8500, wasteAct: 13000, enabled: true },
        { year: 2025, month: 6, grn: 160000, import: 80000, dispatched: 128000, export: 19500, wasteCusde: 8700, wasteAct: 13500, enabled: true },
        { year: 2025, month: 7, grn: 170000, import: 84000, dispatched: 134000, export: 20500, wasteCusde: 9000, wasteAct: 14000, enabled: true },
        { year: 2025, month: 8, grn: 150000, import: 78000, dispatched: 120000, export: 18500, wasteCusde: 8200, wasteAct: 12500, enabled: true },
        { year: 2025, month: 9, grn: 175000, import: 90000, dispatched: 138000, export: 21000, wasteCusde: 9600, wasteAct: 15000, enabled: true },
        { year: 2025, month: 10, grn: 180000, import: 92000, dispatched: 142000, export: 22000, wasteCusde: 9800, wasteAct: 15500, enabled: true },
        { year: 2025, month: 11, grn: 172000, import: 88000, dispatched: 136000, export: 20500, wasteCusde: 9400, wasteAct: 14800, enabled: true },
        { year: 2025, month: 12, grn: 185000, import: 95000, dispatched: 150000, export: 23000, wasteCusde: 10500, wasteAct: 16000, enabled: true }
    ]
};

let currentPlantView = 'all';
let charts = {};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initPlantToggles();
    initBreakdownTabs();
    initModal();
    initSettingsButtons();
    
    renderDashboard();
    renderSettingsTables();
});

// ============================================
// NAVIGATION
// ============================================

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.dataset.page;
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Show target page
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById(targetPage + 'Page').classList.add('active');
            
            // Close mobile menu
            navMenu.classList.remove('active');
            
            // Refresh dashboard if navigating to it
            if (targetPage === 'dashboard') {
                renderDashboard();
            }
        });
    });
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

// ============================================
// BREAKDOWN TABLE TABS
// ============================================

function initBreakdownTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const plant = this.dataset.plant;
            
            // Update active tab
            tabButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update current view
            currentPlantView = plant;
            
            // Re-render breakdown table
            renderBreakdownTable();
        });
    });
}

// ============================================
// PLANT TOGGLES
// ============================================

function initPlantToggles() {
    const toggles = {
        ep1: document.getElementById('toggleEP1'),
        ep2: document.getElementById('toggleEP2'),
        cp: document.getElementById('toggleCP')
    };
    
    Object.entries(toggles).forEach(([plant, toggle]) => {
        toggle.addEventListener('change', function() {
            const isEnabled = this.checked;
            plantData[plant].forEach(entry => {
                entry.enabled = isEnabled;
            });
            renderDashboard();
            renderSettingsTables();
        });
    });
}

// ============================================
// CALCULATIONS
// ============================================

function calculateMetrics(data) {
    const grn = data.grn || 0;
    const dispatched = data.dispatched || 0;
    const exportVal = data.export || 0;
    const wasteCusde = data.wasteCusde || 0;
    const wasteAct = data.wasteAct || 0;
    
    // Per request: processed = Local (dispatched) + Export + Waste (CUSDE)
    // DO NOT include wasteAct (ACT) in processed
    const processed = dispatched + exportVal + wasteCusde;
    const balance = grn - processed;
    const utilization = grn > 0 ? (processed / grn * 100) : 0;
    
    return {
        grn,
        import: data.import || 0,
        dispatched,
        export: exportVal,
        wasteCusde,
        wasteAct,
        processed,
        balance,
        utilization
    };
}

function aggregatePlantData(plant) {
    const data = plantData[plant].filter(entry => entry.enabled);
    
    return data.reduce((acc, entry) => {
        const metrics = calculateMetrics(entry);
        return {
            grn: acc.grn + metrics.grn,
            import: acc.import + metrics.import,
            dispatched: acc.dispatched + metrics.dispatched,
            export: acc.export + metrics.export,
            wasteCusde: acc.wasteCusde + metrics.wasteCusde,
            wasteAct: acc.wasteAct + metrics.wasteAct,
            processed: acc.processed + metrics.processed,
            balance: acc.balance + metrics.balance
        };
    }, { grn: 0, import: 0, dispatched: 0, export: 0, wasteCusde: 0, wasteAct: 0, processed: 0, balance: 0 });
}

function getAllPlantsTotal() {
    const ep1Total = aggregatePlantData('ep1');
    const ep2Total = aggregatePlantData('ep2');
    const cpTotal = aggregatePlantData('cp');
    
    return {
        grn: ep1Total.grn + ep2Total.grn + cpTotal.grn,
        import: ep1Total.import + ep2Total.import + cpTotal.import,
        dispatched: ep1Total.dispatched + ep2Total.dispatched + cpTotal.dispatched,
        export: ep1Total.export + ep2Total.export + cpTotal.export,
        wasteCusde: ep1Total.wasteCusde + ep2Total.wasteCusde + cpTotal.wasteCusde,
        wasteAct: ep1Total.wasteAct + ep2Total.wasteAct + cpTotal.wasteAct,
        processed: ep1Total.processed + ep2Total.processed + cpTotal.processed,
        balance: ep1Total.balance + ep2Total.balance + cpTotal.balance
    };
}

// ============================================
// DASHBOARD RENDERING
// ============================================

function renderDashboard() {
    renderKPICards();
    renderBreakdownTable();
    renderPlantCards();
    renderCharts();
    renderFlowAnalysis();
    renderInsights();
}

function renderKPICards() {
    const totals = getAllPlantsTotal();
    const utilization = totals.grn > 0 ? (totals.processed / totals.grn * 100) : 0;
    
    document.getElementById('totalGRN').textContent = formatNumber(totals.grn);
    document.getElementById('totalProcessed').textContent = formatNumber(totals.processed);
    document.getElementById('totalBalance').textContent = formatNumber(totals.balance);
    document.getElementById('overallUtilization').textContent = utilization.toFixed(1) + '%';
}

function renderBreakdownTable() {
    const tbody = document.getElementById('breakdownBody');
    const footer = document.getElementById('breakdownFooter');
    tbody.innerHTML = '';
    
    let tableData = [];
    let totals = { grn: 0, import: 0, dispatched: 0, export: 0, wasteCusde: 0, wasteAct: 0, balance: 0, processed: 0 };
    
    if (currentPlantView === 'all') {
        // Show all plants combined by month
        const allMonths = new Set();
        ['ep1', 'ep2', 'cp'].forEach(plant => {
            plantData[plant].filter(e => e.enabled).forEach(entry => {
                allMonths.add(`${entry.year}-${entry.month}`);
            });
        });
        
        // Sort months numerically by year then month
        const sortedMonths = Array.from(allMonths)
            .map(k => k.split('-').map(Number))
            .sort((a, b) => a[0] - b[0] || a[1] - b[1])
            .map(arr => `${arr[0]}-${arr[1]}`);
        
        sortedMonths.forEach(monthKey => {
            const [year, month] = monthKey.split('-').map(Number);
            let monthTotal = { grn: 0, import: 0, dispatched: 0, export: 0, wasteCusde: 0, wasteAct: 0 };
            
            ['ep1', 'ep2', 'cp'].forEach(plant => {
                const entry = plantData[plant].find(e => e.year === year && e.month === month && e.enabled);
                if (entry) {
                    monthTotal.grn += entry.grn;
                    monthTotal.import += entry.import;
                    monthTotal.dispatched += entry.dispatched;
                    monthTotal.export += entry.export;
                    monthTotal.wasteCusde += entry.wasteCusde;
                    monthTotal.wasteAct += entry.wasteAct;
                }
            });
            
            const metrics = calculateMetrics(monthTotal);
            tableData.push({ year, month, ...metrics });
            
            totals.grn += metrics.grn;
            totals.import += metrics.import;
            totals.dispatched += metrics.dispatched;
            totals.export += metrics.export;
            totals.wasteCusde += metrics.wasteCusde;
            totals.wasteAct += metrics.wasteAct;
            totals.balance += metrics.balance;
            totals.processed += metrics.processed;
        });
    } else {
        // Show single plant data
        const data = plantData[currentPlantView].filter(e => e.enabled);
        const sortedData = data.slice().sort((a,b) => a.year - b.year || a.month - b.month);
        sortedData.forEach(entry => {
            const metrics = calculateMetrics(entry);
            tableData.push({ year: entry.year, month: entry.month, ...metrics });
            
            totals.grn += metrics.grn;
            totals.import += metrics.import;
            totals.dispatched += metrics.dispatched;
            totals.export += metrics.export;
            totals.wasteCusde += metrics.wasteCusde;
            totals.wasteAct += metrics.wasteAct;
            totals.balance += metrics.balance;
            totals.processed += metrics.processed;
        });
    }
    
    // Render rows
    tableData.forEach(data => {
        const row = document.createElement('tr');
        if (currentPlantView !== 'all') {
            row.classList.add(`plant-${currentPlantView}`);
        }
        
        const balanceClass = data.balance >= 0 ? 'balance-positive' : 'balance-negative';
        const utilClass = data.utilization < 70 ? 'util-low' : 
                         data.utilization < 90 ? 'util-medium' : 'util-high';
        
        row.innerHTML = `
            <td>${getMonthName(data.month)} ${data.year}</td>
            <td>${formatNumber(data.grn)}</td>
            <td>${formatNumber(data.import)}</td>
            <td>${formatNumber(data.dispatched)}</td>
            <td>${formatNumber(data.export)}</td>
            <td>${formatNumber(data.wasteCusde)}</td>
            <td>${formatNumber(data.wasteAct)}</td>
            <td class="${balanceClass}">${formatNumber(data.balance)}</td>
            <td class="${utilClass}">${data.utilization.toFixed(1)}%</td>
        `;
        tbody.appendChild(row);
    });
    
    // Update footer
    const totalUtilization = totals.grn > 0 ? (totals.processed / totals.grn * 100) : 0;
    const footerBalanceClass = totals.balance >= 0 ? 'balance-positive' : 'balance-negative';
    const footerUtilClass = totalUtilization < 70 ? 'util-low' : 
                           totalUtilization < 90 ? 'util-medium' : 'util-high';
    
    document.getElementById('footerGRN').textContent = formatNumber(totals.grn);
    document.getElementById('footerImport').textContent = formatNumber(totals.import);
    document.getElementById('footerDispatched').textContent = formatNumber(totals.dispatched);
    document.getElementById('footerExport').textContent = formatNumber(totals.export);
    document.getElementById('footerCusde').textContent = formatNumber(totals.wasteCusde);
    document.getElementById('footerAct').textContent = formatNumber(totals.wasteAct);
    document.getElementById('footerBalance').innerHTML = `<span class="${footerBalanceClass}">${formatNumber(totals.balance)}</span>`;
    document.getElementById('footerPercent').innerHTML = `<span class="${footerUtilClass}">${totalUtilization.toFixed(1)}%</span>`;
}

function renderPlantCards() {
    const container = document.getElementById('plantCardsGrid');
    container.innerHTML = '';
    
    const plants = [
        { id: 'ep1', name: 'EP 1', fullName: 'PLANT', icon: '🏭', color: 'ep1' },
        { id: 'ep2', name: 'EP 2', fullName: 'PLANT', icon: '🏭', color: 'ep2' },
        { id: 'cp', name: 'CP', fullName: 'PLANT', icon: '🏢', color: 'cp' }
    ];
    
    plants.forEach(plant => {
        const totals = aggregatePlantData(plant.id);
        const utilization = totals.grn > 0 ? (totals.processed / totals.grn * 100) : 0;
        
        const card = document.createElement('div');
        card.className = `plant-card ${plant.color}`;
        card.innerHTML = `
            <div class="plant-card-header">
                <div class="plant-card-icon">${plant.icon}</div>
                <div class="plant-card-title">${plant.name} - ${plant.fullName}</div>
            </div>
            <div class="plant-card-metrics">
                <div class="plant-metric">
                    <span class="plant-metric-label">Total GRN</span>
                    <span class="plant-metric-value">${formatNumber(totals.grn)}</span>
                </div>
                <div class="plant-metric">
                    <span class="plant-metric-label">Local</span>
                    <span class="plant-metric-value">${formatNumber(totals.dispatched)}</span>
                </div>
                <div class="plant-metric">
                    <span class="plant-metric-label">Export</span>
                    <span class="plant-metric-value">${formatNumber(totals.export)}</span>
                </div>
                <div class="plant-metric">
                    <span class="plant-metric-label">Waste (CUSDE)</span>
                    <span class="plant-metric-value">${formatNumber(totals.wasteCusde)}</span>
                </div>
                <div class="plant-metric">
                    <span class="plant-metric-label">GAP STOCK</span>
                    <span class="plant-metric-value ${totals.balance >= 0 ? 'balance-positive' : 'balance-negative'}">${formatNumber(totals.balance)}</span>
                </div>
                <div class="plant-metric">
                    <span class="plant-metric-label">Utilization</span>
                    <span class="plant-metric-value">${utilization.toFixed(1)}%</span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// ============================================
// CHARTS
// ============================================

function renderCharts() {
    renderPlantPerformanceChart();
    renderMonthlyTrendsChart();
    renderUtilizationChart();
    renderPieCharts();
}

function getSortedMonthKeysFromData() {
    const allMonths = new Set();
    ['ep1', 'ep2', 'cp'].forEach(plant => {
        plantData[plant].filter(e => e.enabled).forEach(entry => {
            allMonths.add(`${entry.year}-${entry.month}`);
        });
    });
    const sorted = Array.from(allMonths)
        .map(k => k.split('-').map(Number))
        .sort((a, b) => a[0] - b[0] || a[1] - b[1])
        .map(arr => `${arr[0]}-${arr[1]}`);
    return sorted;
}

function renderPlantPerformanceChart() {
    const ctx = document.getElementById('plantPerformanceChart');
    if (!ctx) return;
    
    if (charts.plantPerformance) {
        charts.plantPerformance.destroy();
    }
    
    const ep1 = aggregatePlantData('ep1');
    const ep2 = aggregatePlantData('ep2');
    const cp = aggregatePlantData('cp');
    
    charts.plantPerformance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['EP 1', 'EP 2', 'CP'],
            datasets: [
                {
                    label: 'GRN',
                    data: [ep1.grn, ep2.grn, cp.grn],
                    backgroundColor: 'rgba(59, 130, 246, 0.8)'
                },
                {
                    label: 'Local',
                    data: [ep1.dispatched, ep2.dispatched, cp.dispatched],
                    backgroundColor: 'rgba(16, 185, 129, 0.8)'
                },
                {
                    label: 'Export',
                    data: [ep1.export, ep2.export, cp.export],
                    backgroundColor: 'rgba(249, 115, 22, 0.8)'
                },
                {
                    label: 'Waste (CUSDE)',
                    data: [ep1.wasteCusde, ep2.wasteCusde, cp.wasteCusde],
                    backgroundColor: 'rgba(239, 68, 68, 0.8)'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { position: 'top' }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatNumber(value);
                        }
                    }
                }
            }
        }
    });
}

function renderMonthlyTrendsChart() {
    const ctx = document.getElementById('monthlyTrendsChart');
    if (!ctx) return;
    
    if (charts.monthlyTrends) {
        charts.monthlyTrends.destroy();
    }
    
    const monthKeys = getSortedMonthKeysFromData(); // e.g., "2025-1", "2025-2", ...
    const labels = monthKeys.map(k => {
        const [y, m] = k.split('-').map(Number);
        return `${getMonthName(m)} ${y}`;
    });
    
    function buildSeries(plantId, valueKey) {
        const map = {};
        plantData[plantId].filter(e => e.enabled).forEach(e => {
            map[`${e.year}-${e.month}`] = e[valueKey] || 0;
        });
        return monthKeys.map(k => map[k] !== undefined ? map[k] : 0);
    }
    
    const ep1Data = buildSeries('ep1', 'grn');
    const ep2Data = buildSeries('ep2', 'grn');
    const cpData = buildSeries('cp', 'grn');
    
    charts.monthlyTrends = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'EP 1',
                    data: ep1Data,
                    borderColor: 'rgba(59, 130, 246, 1)',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.4
                },
                {
                    label: 'EP 2',
                    data: ep2Data,
                    borderColor: 'rgba(16, 185, 129, 1)',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    tension: 0.4
                },
                {
                    label: 'CP',
                    data: cpData,
                    borderColor: 'rgba(249, 115, 22, 1)',
                    backgroundColor: 'rgba(249, 115, 22, 0.1)',
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: { legend: { position: 'top' } },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: value => formatNumber(value) }
                }
            }
        }
    });
}

function renderUtilizationChart() {
    const ctx = document.getElementById('utilizationChart');
    if (!ctx) return;
    
    if (charts.utilization) {
        charts.utilization.destroy();
    }
    
    const monthKeys = getSortedMonthKeysFromData();
    const labels = monthKeys.map(k => {
        const [y, m] = k.split('-').map(Number);
        return `${getMonthName(m)} ${y}`;
    });
    
    function buildUtilSeries(plantId) {
        const map = {};
        plantData[plantId].filter(e => e.enabled).forEach(e => {
            const metrics = calculateMetrics(e);
            map[`${e.year}-${e.month}`] = metrics.utilization;
        });
        return monthKeys.map(k => (map[k] !== undefined ? map[k] : 0));
    }
    
    const ep1Util = buildUtilSeries('ep1');
    const ep2Util = buildUtilSeries('ep2');
    const cpUtil = buildUtilSeries('cp');
    
    charts.utilization = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'EP 1',
                    data: ep1Util,
                    backgroundColor: 'rgba(59, 130, 246, 0.8)'
                },
                {
                    label: 'EP 2',
                    data: ep2Util,
                    backgroundColor: 'rgba(16, 185, 129, 0.8)'
                },
                {
                    label: 'CP',
                    data: cpUtil,
                    backgroundColor: 'rgba(249, 115, 22, 0.8)'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: { legend: { position: 'top' } },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { callback: function(value) { return value + '%'; } }
                }
            }
        }
    });
}

function renderPieCharts() {
    const plants = [
        { id: 'ep1', canvasId: 'ep1PieChart', color: ['#3b82f6', '#10b981', '#ef4444'] },
        { id: 'ep2', canvasId: 'ep2PieChart', color: ['#3b82f6', '#10b981', '#ef4444'] },
        { id: 'cp', canvasId: 'cpPieChart', color: ['#3b82f6', '#10b981', '#ef4444'] }
    ];
    
    plants.forEach(plant => {
        const ctx = document.getElementById(plant.canvasId);
        if (!ctx) return;
        
        if (charts[plant.id + 'Pie']) {
            charts[plant.id + 'Pie'].destroy();
        }
        
        const totals = aggregatePlantData(plant.id);
        
        charts[plant.id + 'Pie'] = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Local', 'Export', 'Waste (CUSDE)'],
                datasets: [{
                    data: [totals.dispatched, totals.export, totals.wasteCusde],
                    backgroundColor: plant.color
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: { legend: { position: 'bottom' } }
            }
        });
    });
}

// ============================================
// FLOW ANALYSIS
// ============================================

function renderFlowAnalysis() {
    const container = document.getElementById('flowAnalysis');
    if (!container) return;
    
    const totals = getAllPlantsTotal();
    
    container.innerHTML = `
        <div class="flow-item">
            <div class="flow-label">Total Raw Material (GRN)</div>
            <div class="flow-arrow">→</div>
            <div class="flow-value">${formatNumber(totals.grn)}</div>
        </div>
        <div class="flow-item">
            <div class="flow-label">Import (Display Only)</div>
            <div class="flow-arrow">+</div>
            <div class="flow-value">${formatNumber(totals.import)}</div>
        </div>
        <div class="flow-item">
            <div class="flow-label">Total Processing</div>
            <div class="flow-arrow">→</div>
            <div class="flow-value">${formatNumber(totals.processed)}</div>
            <div class="flow-breakdown">(Local: ${formatNumber(totals.dispatched)} + Export: ${formatNumber(totals.export)} + Waste (CUSDE): ${formatNumber(totals.wasteCusde)})</div>
        </div>
        <div class="flow-item">
            <div class="flow-label">Final Balance</div>
            <div class="flow-arrow">→</div>
            <div class="flow-value ${totals.balance >= 0 ? 'balance-positive' : 'balance-negative'}">${formatNumber(totals.balance)}</div>
        </div>
    `;
}
// ..........................................................................................

function renderInsights() {
    const container = document.getElementById('insightsContainer');
    if (!container) return;
    
    const insights = generateInsights();
    
    container.innerHTML = insights.map(insight => `
        <div class="insight-item">
            <div class="insight-type">${insight.type}</div>
            <div class="insight-text">${insight.text}</div>
        </div>
    `).join('');
}

//.............................................................................................

// ============================================
// INSIGHTS (Continuation from your existing code)
// ============================================

function generateInsights() {
    const insights = [];
    const totals = getAllPlantsTotal();
    const ep1 = aggregatePlantData('ep1');
    const ep2 = aggregatePlantData('ep2');
    const cp = aggregatePlantData('cp');
    
    // Overall utilization insight
    const overallUtil = totals.grn > 0 ? (totals.processed / totals.grn * 100) : 0;
    if (overallUtil < 70) {
        insights.push({
            type: '⚠️ LOW UTILIZATION',
            text: `Overall utilization is ${overallUtil.toFixed(1)}% which is below the 70% threshold. Consider optimizing production schedules.`
        });
    } else if (overallUtil > 90) {
        insights.push({
            type: '✅ EXCELLENT PERFORMANCE',
            text: `Overall utilization is ${overallUtil.toFixed(1)}%. All plants are performing efficiently!`
        });
    }
    
    // Balance insight
    if (totals.balance < 0) {
        insights.push({
            type: '⚠️ NEGATIVE BALANCE',
            text: `Total balance is negative (${formatNumber(totals.balance)}). Processing exceeded GRN. Review data accuracy.`
        });
    } else if (totals.balance > totals.grn * 0.2) {
        insights.push({
            type: '📊 HIGH INVENTORY',
            text: `Balance is ${formatNumber(totals.balance)}, which is over 20% of total GRN. Consider increasing production output.`
        });
    }
    
    // Best performing plant
    const plantUtils = [
        { name: 'EP 1', util: ep1.grn > 0 ? (ep1.processed / ep1.grn * 100) : 0, data: ep1 },
        { name: 'EP 2', util: ep2.grn > 0 ? (ep2.processed / ep2.grn * 100) : 0, data: ep2 },
        { name: 'CP', util: cp.grn > 0 ? (cp.processed / cp.grn * 100) : 0, data: cp }
    ];
    const bestPlant = plantUtils.reduce((a, b) => a.util > b.util ? a : b);
    const worstPlant = plantUtils.reduce((a, b) => a.util < b.util ? a : b);
    
    insights.push({
        type: '🏆 TOP PERFORMER',
        text: `${bestPlant.name} has the highest utilization at ${bestPlant.util.toFixed(1)}% with total GRN of ${formatNumber(bestPlant.data.grn)}.`
    });
    
    // Worst performing plant (if significantly lower)
    if (worstPlant.util < 70 && Math.abs(bestPlant.util - worstPlant.util) > 15) {
        insights.push({
            type: '⚠️ ATTENTION NEEDED',
            text: `${worstPlant.name} has the lowest utilization at ${worstPlant.util.toFixed(1)}%. Review operations for improvement opportunities.`
        });
    }
    
    // Waste analysis
    const totalWastePercent = totals.grn > 0 ? (totals.wasteCusde / totals.grn * 100) : 0;
    if (totalWastePercent > 5) {
        insights.push({
            type: '♻️ WASTE ALERT',
            text: `Total waste is ${totalWastePercent.toFixed(1)}% of GRN (${formatNumber(totals.wasteCusde)}). Consider waste reduction initiatives.`
        });
    }
    
    // Export performance
    const exportPercent = totals.grn > 0 ? (totals.export / totals.grn * 100) : 0;
    insights.push({
        type: '🌍 EXPORT PERFORMANCE',
        text: `Export accounts for ${exportPercent.toFixed(1)}% of total GRN (${formatNumber(totals.export)}). ${exportPercent > 15 ? 'Strong export performance!' : 'Potential to increase export volume.'}`
    });
    
    return insights;
}

// ============================================
// SETTINGS TABLES
// ============================================

function renderSettingsTables() {
    renderPlantSettingsTable('ep1', 'ep1TableBody');
    renderPlantSettingsTable('ep2', 'ep2TableBody');
    renderPlantSettingsTable('cp', 'cpTableBody');
}

function renderPlantSettingsTable(plantId, tbodyId) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    const data = plantData[plantId];
    
    data.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.year}</td>
            <td>${getMonthName(entry.month)}</td>
            <td>${formatNumber(entry.grn)}</td>
            <td>${formatNumber(entry.import)}</td>
            <td>${formatNumber(entry.dispatched)}</td>
            <td>${formatNumber(entry.export)}</td>
            <td>${formatNumber(entry.wasteCusde)}</td>
            <td>${formatNumber(entry.wasteAct)}</td>
            <td>
                <label class="toggle-label" style="margin: 0;">
                    <input type="checkbox" ${entry.enabled ? 'checked' : ''} 
                           onchange="toggleMonthData('${plantId}', ${index}, this.checked)">
                    <span class="toggle-slider"></span>
                </label>
            </td>
            <td>
                <button class="btn btn-edit" onclick="editMonthData('${plantId}', ${index})">Edit</button>
                <button class="btn btn-danger" onclick="deleteMonthData('${plantId}', ${index})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function toggleMonthData(plantId, index, enabled) {
    plantData[plantId][index].enabled = enabled;
    renderDashboard();
}

function editMonthData(plantId, index) {
    editingMonthKey = `${plantId}-${index}`;
    const entry = plantData[plantId][index];
    
    document.getElementById('modalTitle').textContent = 'Edit Month Data';
    document.getElementById('inputYear').value = entry.year;
    document.getElementById('inputMonth').value = entry.month;
    
    // Clear all inputs first
    clearFormInputs();
    
    // Populate the selected plant's data
    const plantPrefix = plantId.toUpperCase();
    document.getElementById(`input${plantPrefix}GRN`).value = entry.grn;
    document.getElementById(`input${plantPrefix}Import`).value = entry.import;
    document.getElementById(`input${plantPrefix}Dispatched`).value = entry.dispatched;
    document.getElementById(`input${plantPrefix}Export`).value = entry.export;
    document.getElementById(`input${plantPrefix}WasteCusde`).value = entry.wasteCusde;
    document.getElementById(`input${plantPrefix}WasteAct`).value = entry.wasteAct;
    
    // For other plants, check if same month exists
    const otherPlants = ['ep1', 'ep2', 'cp'].filter(p => p !== plantId);
    otherPlants.forEach(plant => {
        const otherEntry = plantData[plant].find(e => e.year === entry.year && e.month === entry.month);
        if (otherEntry) {
            const prefix = plant.toUpperCase();
            document.getElementById(`input${prefix}GRN`).value = otherEntry.grn;
            document.getElementById(`input${prefix}Import`).value = otherEntry.import;
            document.getElementById(`input${prefix}Dispatched`).value = otherEntry.dispatched;
            document.getElementById(`input${prefix}Export`).value = otherEntry.export;
            document.getElementById(`input${prefix}WasteCusde`).value = otherEntry.wasteCusde;
            document.getElementById(`input${prefix}WasteAct`).value = otherEntry.wasteAct;
        }
    });
    
    openModal();
}

function deleteMonthData(plantId, index) {
    if (confirm('Are you sure you want to delete this month data?')) {
        plantData[plantId].splice(index, 1);
        renderDashboard();
        renderSettingsTables();
    }
}

// ============================================
// MODAL MANAGEMENT
// ============================================

function initModal() {
    const modal = document.getElementById('dataModal');
    const closeBtn = document.querySelector('.modal-close');
    const cancelBtn = document.getElementById('cancelBtn');
    const form = document.getElementById('dataForm');
    
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    form.addEventListener('submit', handleFormSubmit);
}

function openModal() {
    document.getElementById('dataModal').classList.add('active');
}

function closeModal() {
    document.getElementById('dataModal').classList.remove('active');
    editingMonthKey = null;
    clearFormInputs();
}

function clearFormInputs() {
    const plants = ['EP1', 'EP2', 'CP'];
    plants.forEach(plant => {
        document.getElementById(`input${plant}GRN`).value = 0;
        document.getElementById(`input${plant}Import`).value = 0;
        document.getElementById(`input${plant}Dispatched`).value = 0;
        document.getElementById(`input${plant}Export`).value = 0;
        document.getElementById(`input${plant}WasteCusde`).value = 0;
        document.getElementById(`input${plant}WasteAct`).value = 0;
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const year = parseInt(document.getElementById('inputYear').value);
    const month = parseInt(document.getElementById('inputMonth').value);
    
    const plants = ['ep1', 'ep2', 'cp'];
    
    if (editingMonthKey) {
        // Edit mode
        const [plantId, indexStr] = editingMonthKey.split('-');
        const index = parseInt(indexStr);
        
        plants.forEach(plant => {
            const prefix = plant.toUpperCase();
            const newData = {
                year: year,
                month: month,
                grn: parseFloat(document.getElementById(`input${prefix}GRN`).value) || 0,
                import: parseFloat(document.getElementById(`input${prefix}Import`).value) || 0,
                dispatched: parseFloat(document.getElementById(`input${prefix}Dispatched`).value) || 0,
                export: parseFloat(document.getElementById(`input${prefix}Export`).value) || 0,
                wasteCusde: parseFloat(document.getElementById(`input${prefix}WasteCusde`).value) || 0,
                wasteAct: parseFloat(document.getElementById(`input${prefix}WasteAct`).value) || 0,
                enabled: true
            };
            
            const existingIndex = plantData[plant].findIndex(e => e.year === year && e.month === month);
            
            if (plant === plantId) {
                // Target plant being edited
                if (existingIndex === -1 || existingIndex === index) {
                    // Either same month (no conflict) or the month wasn't moved to an existing slot: replace at index
                    plantData[plant][index] = newData;
                } else {
                    // Another entry exists for that month: overwrite existing and remove the old entry
                    plantData[plant][existingIndex] = newData;
                    // Remove the old entry
                    plantData[plant].splice(index, 1);
                }
            } else {
                // Other plants: update existing or add new
                if (existingIndex !== -1) {
                    plantData[plant][existingIndex] = newData;
                } else {
                    plantData[plant].push(newData);
                }
            }
            
            // Ensure chronological sort
            plantData[plant].sort((a, b) => a.year - b.year || a.month - b.month);
        });
    } else {
        // Add mode
        // First check if any plant already has data for this year/month -> abort entire add if so
        const conflictPlant = plants.find(plant => plantData[plant].some(e => e.year === year && e.month === month));
        if (conflictPlant) {
            alert(`Data for ${getMonthName(month)} ${year} already exists in ${conflictPlant.toUpperCase()}. Please edit the existing entry.`);
            return;
        }
        
        plants.forEach(plant => {
            const prefix = plant.toUpperCase();
            
            const newData = {
                year: year,
                month: month,
                grn: parseFloat(document.getElementById(`input${prefix}GRN`).value) || 0,
                import: parseFloat(document.getElementById(`input${prefix}Import`).value) || 0,
                dispatched: parseFloat(document.getElementById(`input${prefix}Dispatched`).value) || 0,
                export: parseFloat(document.getElementById(`input${prefix}Export`).value) || 0,
                wasteCusde: parseFloat(document.getElementById(`input${prefix}WasteCusde`).value) || 0,
                wasteAct: parseFloat(document.getElementById(`input${prefix}WasteAct`).value) || 0,
                enabled: true
            };
            
            plantData[plant].push(newData);
            plantData[plant].sort((a, b) => {
                if (a.year !== b.year) return a.year - b.year;
                return a.month - b.month;
            });
        });
    }
    
    closeModal();
    renderDashboard();
    renderSettingsTables();
}

// ============================================
// SETTINGS BUTTONS
// ============================================

function initSettingsButtons() {
    const addDataBtn = document.getElementById('addDataBtn');
    const resetDataBtn = document.getElementById('resetDataBtn');
    
    addDataBtn.addEventListener('click', function() {
        editingMonthKey = null;
        document.getElementById('modalTitle').textContent = 'Add New Month Data';
        clearFormInputs();
        
        // Set default values
        const currentDate = new Date();
        document.getElementById('inputYear').value = currentDate.getFullYear();
        document.getElementById('inputMonth').value = currentDate.getMonth() + 1;
        
        openModal();
    });
    
    resetDataBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to reset all data to default values? This cannot be undone.')) {
            resetToDefaultData();
            renderDashboard();
            renderSettingsTables();
            alert('Data has been reset to default values.');
        }
    });
}

function resetToDefaultData() {
    // Reuse the same sample data (could factor out), resetting to initial sample values
    // (omitted for brevity since same as initial plantData — call page reload to revert)
    location.reload();
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function formatNumber(num) {
    return new Intl.NumberFormat('en-US').format(Math.round(num));
}

function getMonthName(monthNum) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[monthNum - 1];
}