// ============================================
// DATA STRUCTURE & STATE MANAGEMENT
// ============================================

let editingMonthKey = null;
let mergeYD = false; // when true YD is merged into CP (3-plant view)

let plantData = {
    ep1: [
        { year: 2025, month: 1, grn: 121569.27, import: 254551.19, dispatched: 152250.90, export: 30846.05, wasteCusde: 14922.09, wasteAct: 28872.09, enabled: true },
        { year: 2025, month: 2, grn: 206773.39, import: 75466.34, dispatched: 120943.92, export: 40975.49, wasteCusde: 3000.00, wasteAct: 15690.00, enabled: true },
        { year: 2025, month: 3, grn: 120411.12, import: 189414.04, dispatched: 125022.07, export: 34058.45, wasteCusde: 2000.00, wasteAct: 10555.00, enabled: true },
        { year: 2025, month: 4, grn: 418.23, import: 41568.33, dispatched: 60448.51, export: 14419.75, wasteCusde: 34667.88, wasteAct: 43077.88, enabled: true },
        { year: 2025, month: 5, grn: 47055.19, import: 62906.29, dispatched: 6416.41, export: 1442.75, wasteCusde: 3098.00, wasteAct: 3098.00, enabled: true },
        { year: 2025, month: 6, grn: 94988.04, import: 220417.34, dispatched: 38575.41, export: 10362.03, wasteCusde: 1000.00, wasteAct: 4495.00, enabled: true },
        { year: 2025, month: 7, grn: 134793.66, import: 125291.46, dispatched: 73710.73, export: 9144.11, wasteCusde: 2000.00, wasteAct: 9145.00, enabled: true },
        { year: 2025, month: 8, grn: 92887.71, import: 43348.62, dispatched: 63793.41, export: 2818.64, wasteCusde: 3400.00, wasteAct: 7436.40, enabled: true },
        { year: 2025, month: 9, grn: 48300.01, import: 66892.76, dispatched: 42656.74, export: 5475.57, wasteCusde: 4291.00, wasteAct: 8401.00, enabled: true },
        { year: 2025, month: 10, grn: 74094.10, import: 121133.30, dispatched: 47292.42, export: 5407.41, wasteCusde: 3242.00, wasteAct: 10922.00, enabled: true },
        { year: 2025, month: 11, grn: 73705.70, import: 57956.92, dispatched: 43067.60, export: 2938.69, wasteCusde: 24202.00, wasteAct: 23302.00, enabled: true },
        // month 12 intentionally left empty in image -> keep as a zero entry if you need it, otherwise no row
    ],

    ep2: [
        { year: 2025, month: 1, grn: 91619.48, import: 76796.06, dispatched: 0, export: 0, wasteCusde: 0, wasteAct: 0, enabled: true },
        { year: 2025, month: 2, grn: 82846.73, import: 77049.22, dispatched: 0, export: 0, wasteCusde: 0, wasteAct: 0, enabled: true },
        { year: 2025, month: 3, grn: 43681.93, import: 43432.28, dispatched: 0, export: 0, wasteCusde: 0, wasteAct: 0, enabled: true },
        { year: 2025, month: 4, grn: 39681.76, import: 28954.49, dispatched: 0, export: 0, wasteCusde: 2434.00, wasteAct: 2434.00, enabled: true },
        { year: 2025, month: 5, grn: 48114.42, import: 26072.38, dispatched: 0, export: 0, wasteCusde: 2809.00, wasteAct: 2809.00, enabled: true },
        { year: 2025, month: 6, grn: 40897.96, import: 42178.74, dispatched: 0, export: 0, wasteCusde: 0, wasteAct: 0, enabled: true },
        { year: 2025, month: 7, grn: 72096.58, import: 61611.41, dispatched: 0, export: 0, wasteCusde: 3144.00, wasteAct: 3144.00, enabled: true },
        { year: 2025, month: 8, grn: 54636.33, import: 25085.40, dispatched: 0, export: 0, wasteCusde: 1032.00, wasteAct: 1032.00, enabled: true },
        { year: 2025, month: 9, grn: 15185.31, import: 8668.21, dispatched: 0, export: 362.48, wasteCusde: 1922.00, wasteAct: 1922.00, enabled: true },
        { year: 2025, month: 10, grn: 16662.46, import: 16626.82, dispatched: 0, export: 256.80, wasteCusde: 2070.00, wasteAct: 2070.00, enabled: true },
        { year: 2025, month: 11, grn: 14105.13, import: 20394.52, dispatched: 0, export: 289.33, wasteCusde: 2000.00, wasteAct: 2000.00, enabled: true },
        // month 12 empty
    ],

    cp: [
        { year: 2025, month: 1, grn: 177357.03, import: 37050.78, dispatched: 177150.43, export: 50207.87, wasteCusde: 0, wasteAct: 0, enabled: true },
        { year: 2025, month: 2, grn: 166864.50, import: 116221.55, dispatched: 130927.75, export: 32835.43, wasteCusde: 0, wasteAct: 0, enabled: true },
        { year: 2025, month: 3, grn: 220358.32, import: 166603.27, dispatched: 153959.20, export: 48081.86, wasteCusde: 0, wasteAct: 0, enabled: true },
        { year: 2025, month: 4, grn: 203763.87, import: 85003.12, dispatched: 140858.01, export: 43630.59, wasteCusde: 0, wasteAct: 0, enabled: true },
        { year: 2025, month: 5, grn: 150905.18, import: 110357.25, dispatched: 140309.06, export: 54870.28, wasteCusde: 0, wasteAct: 0, enabled: true },
        { year: 2025, month: 6, grn: 218180.65, import: 130959.46, dispatched: 148222.05, export: 49297.82, wasteCusde: 0, wasteAct: 0, enabled: true },
        { year: 2025, month: 7, grn: 232082.79, import: 113190.45, dispatched: 155597.44, export: 47203.73, wasteCusde: 0, wasteAct: 0, enabled: true },
        { year: 2025, month: 8, grn: 206104.46, import: 80219.28, dispatched: 150759.27, export: 49626.61, wasteCusde: 0, wasteAct: 0, enabled: true },
        { year: 2025, month: 9, grn: 163326.20, import: 110875.75, dispatched: 177139.62, export: 47949.38, wasteCusde: 0, wasteAct: 0, enabled: true },
        { year: 2025, month: 10, grn: 263777.21, import: 134758.65, dispatched: 146906.81, export: 81810.72, wasteCusde: 0, wasteAct: 0, enabled: true },
        { year: 2025, month: 11, grn: 171184.87, import: 152341.37, dispatched: 100191.28, export: 65184.37, wasteCusde: 0, wasteAct: 0, enabled: true },
        // month 12 empty
    ],

    // YD data remains as previously set (already correct)
    yd: [
        { year: 2025, month: 1, grn: 0, import: 0, dispatched: 20016.18, export: 0, wasteCusde: 0, wasteAct: 0, enabled: true },
        { year: 2025, month: 2, grn: 0, import: 36.10, dispatched: 28913.02, export: 0, wasteCusde: 0, wasteAct: 0, enabled: true },
        { year: 2025, month: 3, grn: 0, import: 0, dispatched: 36165.21, export: 0, wasteCusde: 0, wasteAct: 0, enabled: true },
        { year: 2025, month: 4, grn: 0, import: 32826.80, dispatched: 19973.10, export: 60, wasteCusde: 0, wasteAct: 0, enabled: true },
        { year: 2025, month: 5, grn: 0, import: 16759.30, dispatched: 16490.41, export: 0, wasteCusde: 0, wasteAct: 0, enabled: true },
        { year: 2025, month: 6, grn: 0, import: 24860.10, dispatched: 28693.34, export: 0, wasteCusde: 0, wasteAct: 0, enabled: true },
        { year: 2025, month: 7, grn: 0, import: 1877.90, dispatched: 21248.87, export: 210.9, wasteCusde: 0, wasteAct: 0, enabled: true },
        { year: 2025, month: 8, grn: 0, import: 177.39, dispatched: 18207.84, export: 160.1, wasteCusde: 0, wasteAct: 0, enabled: true },
        { year: 2025, month: 9, grn: 0, import: 13330.60, dispatched: 15155.35, export: 135, wasteCusde: 0, wasteAct: 0, enabled: true },
        { year: 2025, month: 10, grn: 0, import: 880.00, dispatched: 16129.67, export: 45, wasteCusde: 0, wasteAct: 0, enabled: true },
        { year: 2025, month: 11, grn: 0, import: 0, dispatched: 14824.44, export: 188, wasteCusde: 0, wasteAct: 0, enabled: true },
        { year: 2025, month: 12, grn: 0, import: 0, dispatched: 0, export: 0, wasteCusde: 0, wasteAct: 0, enabled: true }
    ]
};

let currentPlantView = 'all';
let charts = {};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // load persisted mergeYD preference if present
    const saved = localStorage.getItem('mergeYD');
    if (saved !== null) {
        mergeYD = saved === 'true';
    }

    initNavigation();
    initPlantToggles();
    initBreakdownTabs();
    initModal();
    initSettingsButtons();
    initMergeToggle(); // now looks for checkbox on settings page (or fallback)

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
        cp: document.getElementById('toggleCP'),
        yd: document.getElementById('toggleYD')
    };
    
    Object.entries(toggles).forEach(([plant, toggle]) => {
        if (!toggle) return;
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
// MERGE YD TOGGLE (MOVED TO SETTINGS)
// - This function is robust: it looks for a checkbox with id
//   'mergeYDCheckboxSettings' (preferred — place it in Settings page),
//   falls back to 'mergeYDCheckbox' if that exists, and persists value.
// ============================================
function initMergeToggle() {
    // prefer settings checkbox id
    const checkbox =
        document.getElementById('mergeYDCheckboxSettings') ||
        document.getElementById('mergeYDCheckbox');

    // elements that reflect/hide YD UI parts (if present)
    const ydTabBtn = document.getElementById('ydTabBtn');
    const ydPieCard = document.getElementById('ydPieCard');

    if (!checkbox) {
        // no toggle exists in DOM — still apply mergeYD state (from localStorage)
        // ensure UI reflects the current state (hide/show YD UI)
        applyMergeYDVisibility();
        return;
    }

    // initialize checkbox state from variable
    checkbox.checked = mergeYD;

    checkbox.addEventListener('change', function() {
        mergeYD = this.checked;
        // persist preference
        localStorage.setItem('mergeYD', String(mergeYD));
        applyMergeYDVisibility();
        renderDashboard();
    });

    // apply initial visibility based on current flag
    applyMergeYDVisibility();

    function applyMergeYDVisibility() {
        if (mergeYD) {
            if (ydTabBtn) ydTabBtn.style.display = 'none';
            if (ydPieCard) ydPieCard.style.display = 'none';
            // if currently viewing YD, switch to CP tab if available
            if (currentPlantView === 'yd') {
                currentPlantView = 'cp';
                const cpTab = document.querySelector('.tab-btn[data-plant="cp"]');
                if (cpTab) {
                    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                    cpTab.classList.add('active');
                }
            }
        } else {
            if (ydTabBtn) ydTabBtn.style.display = '';
            if (ydPieCard) ydPieCard.style.display = '';
        }
    }
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
    // When mergeYD is true and we're aggregating CP, include YD contributions
    const data = plantData[plant].filter(entry => entry.enabled);
    const acc = data.reduce((acc, entry) => {
        const metrics = calculateMetrics(entry);
        acc.grn += metrics.grn;
        acc.import += metrics.import;
        acc.dispatched += metrics.dispatched;
        acc.export += metrics.export;
        acc.wasteCusde += metrics.wasteCusde;
        acc.wasteAct += metrics.wasteAct;
        acc.processed += metrics.processed;
        acc.balance += metrics.balance;
        return acc;
    }, { grn: 0, import: 0, dispatched: 0, export: 0, wasteCusde: 0, wasteAct: 0, processed: 0, balance: 0 });

    if (mergeYD && plant === 'cp') {
        // add YD
        const ydTotal = plantData.yd.filter(e => e.enabled).reduce((a,e) => {
            const m = calculateMetrics(e);
            a.grn += m.grn; a.import += m.import; a.dispatched += m.dispatched; a.export += m.export;
            a.wasteCusde += m.wasteCusde; a.wasteAct += m.wasteAct; a.processed += m.processed; a.balance += m.balance;
            return a;
        }, { grn:0, import:0, dispatched:0, export:0, wasteCusde:0, wasteAct:0, processed:0, balance:0 });
        acc.grn += ydTotal.grn;
        acc.import += ydTotal.import;
        acc.dispatched += ydTotal.dispatched;
        acc.export += ydTotal.export;
        acc.wasteCusde += ydTotal.wasteCusde;
        acc.wasteAct += ydTotal.wasteAct;
        acc.processed += ydTotal.processed;
        acc.balance += ydTotal.balance;
    }

    return acc;
}

function getAllPlantsTotal() {
    // if mergeYD = true the visible plants are ep1, ep2, cp (cp includes yd)
    if (mergeYD) {
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
    } else {
        const ep1Total = aggregatePlantData('ep1');
        const ep2Total = aggregatePlantData('ep2');
        const cpTotal = aggregatePlantData('cp');
        const ydTotal = aggregatePlantData('yd');
        
        return {
            grn: ep1Total.grn + ep2Total.grn + cpTotal.grn + ydTotal.grn,
            import: ep1Total.import + ep2Total.import + cpTotal.import + ydTotal.import,
            dispatched: ep1Total.dispatched + ep2Total.dispatched + cpTotal.dispatched + ydTotal.dispatched,
            export: ep1Total.export + ep2Total.export + cpTotal.export + ydTotal.export,
            wasteCusde: ep1Total.wasteCusde + ep2Total.wasteCusde + cpTotal.wasteCusde + ydTotal.wasteCusde,
            wasteAct: ep1Total.wasteAct + ep2Total.wasteAct + cpTotal.wasteAct + ydTotal.wasteAct,
            processed: ep1Total.processed + ep2Total.processed + cpTotal.processed + ydTotal.processed,
            balance: ep1Total.balance + ep2Total.balance + cpTotal.balance + ydTotal.balance
        };
    }
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
        ['ep1', 'ep2', 'cp', ...(mergeYD ? [] : ['yd'])].forEach(plant => {
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
                // if merging YD: add YD contributions into CP
                if (mergeYD && plant === 'cp') {
                    const ydEntry = plantData.yd.find(e => e.year === year && e.month === month && e.enabled);
                    if (ydEntry) {
                        monthTotal.grn += ydEntry.grn;
                        monthTotal.import += ydEntry.import;
                        monthTotal.dispatched += ydEntry.dispatched;
                        monthTotal.export += ydEntry.export;
                        monthTotal.wasteCusde += ydEntry.wasteCusde;
                        monthTotal.wasteAct += ydEntry.wasteAct;
                    }
                }
            });
            
            // if not merging YD, include YD separately already handled by allMonths
            if (!mergeYD) {
                const ydEntry = plantData.yd.find(e => e.year === year && e.month === month && e.enabled);
                if (ydEntry) {
                    monthTotal.grn += ydEntry.grn;
                    monthTotal.import += ydEntry.import;
                    monthTotal.dispatched += ydEntry.dispatched;
                    monthTotal.export += ydEntry.export;
                    monthTotal.wasteCusde += ydEntry.wasteCusde;
                    monthTotal.wasteAct += ydEntry.wasteAct;
                }
            }
            
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
        let plantKey = currentPlantView;
        if (mergeYD && plantKey === 'cp') {
            // need to create combined cp+yd entries by month
            const months = new Set();
            plantData.cp.filter(e => e.enabled).forEach(e => months.add(`${e.year}-${e.month}`));
            plantData.yd.filter(e => e.enabled).forEach(e => months.add(`${e.year}-${e.month}`));
            const sorted = Array.from(months).map(k => k.split('-').map(Number)).sort((a,b)=>a[0]-b[0]||a[1]-b[1]).map(ar=>`${ar[0]}-${ar[1]}`);
            sorted.forEach(mk=>{
                const [year, month] = mk.split('-').map(Number);
                const cpEntry = plantData.cp.find(e=>e.year===year&&e.month===month&&e.enabled);
                const ydEntry = plantData.yd.find(e=>e.year===year&&e.month===month&&e.enabled);
                const combined = {
                    grn: (cpEntry?cpEntry.grn:0) + (ydEntry?ydEntry.grn:0),
                    import: (cpEntry?cpEntry.import:0) + (ydEntry?ydEntry.import:0),
                    dispatched: (cpEntry?cpEntry.dispatched:0) + (ydEntry?ydEntry.dispatched:0),
                    export: (cpEntry?cpEntry.export:0) + (ydEntry?ydEntry.export:0),
                    wasteCusde: (cpEntry?cpEntry.wasteCusde:0) + (ydEntry?ydEntry.wasteCusde:0),
                    wasteAct: (cpEntry?cpEntry.wasteAct:0) + (ydEntry?ydEntry.wasteAct:0)
                };
                const metrics = calculateMetrics(combined);
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
            const data = plantData[plantKey].filter(e => e.enabled);
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
    
    // If not merging, include YD as its own card
    if (!mergeYD) {
        plants.push({ id: 'yd', name: 'YD', fullName: 'PLANT', icon: '🏬', color: 'yd' });
    }
    
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
    ['ep1', 'ep2', 'cp', ...(mergeYD ? [] : ['yd'])].forEach(plant => {
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
    const yd = mergeYD ? null : aggregatePlantData('yd');
    
    const labels = mergeYD ? ['EP 1', 'EP 2', 'CP'] : ['EP 1', 'EP 2', 'CP', 'YD'];
    const datasets = [
        {
            label: 'GRN',
            data: mergeYD ? [ep1.grn, ep2.grn, cp.grn] : [ep1.grn, ep2.grn, cp.grn, yd.grn],
            backgroundColor: 'rgba(59, 130, 246, 0.8)'
        },
        {
            label: 'Local',
            data: mergeYD ? [ep1.dispatched, ep2.dispatched, cp.dispatched] : [ep1.dispatched, ep2.dispatched, cp.dispatched, yd.dispatched],
            backgroundColor: 'rgba(16, 185, 129, 0.8)'
        },
        {
            label: 'Export',
            data: mergeYD ? [ep1.export, ep2.export, cp.export] : [ep1.export, ep2.export, cp.export, yd.export],
            backgroundColor: 'rgba(249, 115, 22, 0.8)'
        },
        {
            label: 'Waste (CUSDE)',
            data: mergeYD ? [ep1.wasteCusde, ep2.wasteCusde, cp.wasteCusde] : [ep1.wasteCusde, ep2.wasteCusde, cp.wasteCusde, yd.wasteCusde],
            backgroundColor: 'rgba(239, 68, 68, 0.8)'
        }
    ];
    
    charts.plantPerformance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels,
            datasets
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
        // when merging YD and plantId is 'cp', add yd contributions
        if (mergeYD && plantId === 'cp') {
            plantData.yd.filter(e => e.enabled).forEach(e => {
                const key = `${e.year}-${e.month}`;
                map[key] = (map[key] || 0) + (e[valueKey] || 0);
            });
        }
        return monthKeys.map(k => map[k] !== undefined ? map[k] : 0);
    }
    
    const ep1Data = buildSeries('ep1', 'grn');
    const ep2Data = buildSeries('ep2', 'grn');
    const cpData = buildSeries('cp', 'grn');
    const ydData = mergeYD ? null : buildSeries('yd', 'grn');
    
    const datasets = [
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
    ];
    if (!mergeYD) {
        datasets.push({
            label: 'YD',
            data: ydData,
            borderColor: 'rgba(139,92,246,1)',
            backgroundColor: 'rgba(139,92,246,0.1)',
            tension: 0.4
        });
    }
    
    charts.monthlyTrends = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets
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
        // merge yd into cp if needed
        if (mergeYD && plantId === 'cp') {
            // Build combined map explicitly
            const combinedMap = {};
            const months = new Set([...Object.keys(map), ...plantData.yd.filter(e=>e.enabled).map(e=>`${e.year}-${e.month}`)]);
            months.forEach(k => {
                const [yy, mm] = k.split('-').map(Number);
                const cpEntry = plantData.cp.find(e=>e.year===yy&&e.month===mm&&e.enabled);
                const ydEntry = plantData.yd.find(e=>e.year===yy&&e.month===mm&&e.enabled);
                const combined = {
                    grn: (cpEntry?cpEntry.grn:0) + (ydEntry?ydEntry.grn:0),
                    dispatched: (cpEntry?cpEntry.dispatched:0) + (ydEntry?ydEntry.dispatched:0),
                    export: (cpEntry?cpEntry.export:0) + (ydEntry?ydEntry.export:0),
                    wasteCusde: (cpEntry?cpEntry.wasteCusde:0) + (ydEntry?ydEntry.wasteCusde:0)
                };
                combinedMap[k] = calculateMetrics(combined).utilization;
            });
            return monthKeys.map(k => combinedMap[k] !== undefined ? combinedMap[k] : 0);
        }
        return monthKeys.map(k => (map[k] !== undefined ? map[k] : 0));
    }
    
    const ep1Util = buildUtilSeries('ep1');
    const ep2Util = buildUtilSeries('ep2');
    const cpUtil = buildUtilSeries('cp');
    const ydUtil = mergeYD ? null : buildUtilSeries('yd');
    
    const datasets = [
        { label: 'EP 1', data: ep1Util, backgroundColor: 'rgba(59, 130, 246, 0.8)' },
        { label: 'EP 2', data: ep2Util, backgroundColor: 'rgba(16, 185, 129, 0.8)' },
        { label: 'CP', data: cpUtil, backgroundColor: 'rgba(249, 115, 22, 0.8)' }
    ];
    if (!mergeYD) {
        datasets.push({ label: 'YD', data: ydUtil, backgroundColor: 'rgba(139,92,246,0.8)' });
    }
    
    charts.utilization = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets
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
    
    // Render CP (possibly merged)
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

    // YD pie only when not merged
    const ydCtx = document.getElementById('ydPieChart');
    if (ydCtx) {
        if (charts.ydPie) charts.ydPie.destroy();
        if (!mergeYD) {
            const totals = aggregatePlantData('yd');
            charts.ydPie = new Chart(ydCtx, {
                type: 'pie',
                data: {
                    labels: ['Local', 'Export', 'Waste (CUSDE)'],
                    datasets: [{
                        data: [totals.dispatched, totals.export, totals.wasteCusde],
                        backgroundColor: ['#8b5cf6','#3b82f6','#ef4444']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: { legend: { position: 'bottom' } }
                }
            });
            const ydPieCard = document.getElementById('ydPieCard');
            if (ydPieCard) ydPieCard.style.display = '';
        } else {
            const ydPieCard = document.getElementById('ydPieCard');
            if (ydPieCard) ydPieCard.style.display = 'none';
        }
    }
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

// ============================================
// INSIGHTS
// ============================================

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
    renderPlantSettingsTable('yd', 'ydTableBody');

    // reflect persisted mergeYD state on settings page if checkbox exists
    const settingsCheckbox = document.getElementById('mergeYDCheckboxSettings');
    if (settingsCheckbox) settingsCheckbox.checked = mergeYD;
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
    const inputGrn = document.getElementById(`input${plantPrefix}GRN`);
    if (inputGrn) inputGrn.value = entry.grn;
    const inputImport = document.getElementById(`input${plantPrefix}Import`);
    if (inputImport) inputImport.value = entry.import;
    const inputDisp = document.getElementById(`input${plantPrefix}Dispatched`);
    if (inputDisp) inputDisp.value = entry.dispatched;
    const inputExp = document.getElementById(`input${plantPrefix}Export`);
    if (inputExp) inputExp.value = entry.export;
    const inputWC = document.getElementById(`input${plantPrefix}WasteCusde`);
    if (inputWC) inputWC.value = entry.wasteCusde;
    const inputWA = document.getElementById(`input${plantPrefix}WasteAct`);
    if (inputWA) inputWA.value = entry.wasteAct;
    
    // For other plants, check if same month exists
    const otherPlants = ['ep1', 'ep2', 'cp', 'yd'].filter(p => p !== plantId);
    otherPlants.forEach(plant => {
        const otherEntry = plantData[plant].find(e => e.year === entry.year && e.month === entry.month);
        if (otherEntry) {
            const prefix = plant.toUpperCase();
            const g = document.getElementById(`input${prefix}GRN`);
            if (g) g.value = otherEntry.grn;
            const im = document.getElementById(`input${prefix}Import`);
            if (im) im.value = otherEntry.import;
            const d = document.getElementById(`input${prefix}Dispatched`);
            if (d) d.value = otherEntry.dispatched;
            const ex = document.getElementById(`input${prefix}Export`);
            if (ex) ex.value = otherEntry.export;
            const wc = document.getElementById(`input${prefix}WasteCusde`);
            if (wc) wc.value = otherEntry.wasteCusde;
            const wa = document.getElementById(`input${prefix}WasteAct`);
            if (wa) wa.value = otherEntry.wasteAct;
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
    
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    if (form) form.addEventListener('submit', handleFormSubmit);
}

function openModal() {
    const modal = document.getElementById('dataModal');
    if (modal) modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('dataModal');
    if (modal) modal.classList.remove('active');
    editingMonthKey = null;
    clearFormInputs();
}

function clearFormInputs() {
    const plants = ['EP1', 'EP2', 'CP', 'YD'];
    plants.forEach(plant => {
        const elGrn = document.getElementById(`input${plant}GRN`);
        if (elGrn) elGrn.value = 0;
        const elImport = document.getElementById(`input${plant}Import`);
        if (elImport) elImport.value = 0;
        const elDisp = document.getElementById(`input${plant}Dispatched`);
        if (elDisp) elDisp.value = 0;
        const elExp = document.getElementById(`input${plant}Export`);
        if (elExp) elExp.value = 0;
        const elWC = document.getElementById(`input${plant}WasteCusde`);
        if (elWC) elWC.value = 0;
        const elWA = document.getElementById(`input${plant}WasteAct`);
        if (elWA) elWA.value = 0;
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const year = parseInt(document.getElementById('inputYear').value);
    const month = parseInt(document.getElementById('inputMonth').value);
    
    const plants = ['ep1', 'ep2', 'cp', 'yd'];
    
    if (editingMonthKey) {
        // Edit mode
        const [plantId, indexStr] = editingMonthKey.split('-');
        const index = parseInt(indexStr);
        
        plants.forEach(plant => {
            const prefix = plant.toUpperCase();
            const newData = {
                year: year,
                month: month,
                grn: parseFloat((document.getElementById(`input${prefix}GRN`) || { value: 0 }).value) || 0,
                import: parseFloat((document.getElementById(`input${prefix}Import`) || { value: 0 }).value) || 0,
                dispatched: parseFloat((document.getElementById(`input${prefix}Dispatched`) || { value: 0 }).value) || 0,
                export: parseFloat((document.getElementById(`input${prefix}Export`) || { value: 0 }).value) || 0,
                wasteCusde: parseFloat((document.getElementById(`input${prefix}WasteCusde`) || { value: 0 }).value) || 0,
                wasteAct: parseFloat((document.getElementById(`input${prefix}WasteAct`) || { value: 0 }).value) || 0,
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
                grn: parseFloat((document.getElementById(`input${prefix}GRN`) || { value: 0 }).value) || 0,
                import: parseFloat((document.getElementById(`input${prefix}Import`) || { value: 0 }).value) || 0,
                dispatched: parseFloat((document.getElementById(`input${prefix}Dispatched`) || { value: 0 }).value) || 0,
                export: parseFloat((document.getElementById(`input${prefix}Export`) || { value: 0 }).value) || 0,
                wasteCusde: parseFloat((document.getElementById(`input${prefix}WasteCusde`) || { value: 0 }).value) || 0,
                wasteAct: parseFloat((document.getElementById(`input${prefix}WasteAct`) || { value: 0 }).value) || 0,
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
    
    if (addDataBtn) {
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
    }
    
    if (resetDataBtn) {
        resetDataBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to reset all data to default values? This cannot be undone.')) {
                resetToDefaultData();
                renderDashboard();
                renderSettingsTables();
                alert('Data has been reset to default values.');
            }
        });
    }
}

function resetToDefaultData() {
    // simple reload to restore initial sample dataset declared in-file
    localStorage.removeItem('mergeYD');
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
