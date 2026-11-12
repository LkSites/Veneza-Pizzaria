// Catálogo de Produtos da Veneza Pizzaria
const products = [
    {
        id: 1,
        name: "Pizza Margherita Especial",
        category: "Tradicionais",
        badge: "Mais Pedida",
        basePrice: 48.00,
        hasSizes: true,
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=600&q=80",
        description: "Molho de tomate rústico artesanal, mussarela de búfala fresca, rodelas de tomate italiano, folhas de manjericão fresco e fio de azeite extra virgem."
    },
    {
        id: 2,
        name: "Pizza Calabresa Veneziana",
        category: "Tradicionais",
        badge: "Clássica",
        basePrice: 46.00,
        hasSizes: true,
        image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80",
        description: "Fatias selecionadas de calabresa artesanal defumada, rodelas de cebola roxa marinada, azeitonas pretas azadas e orégano chileno."
    },
    {
        id: 3,
        name: "Pizza Quatro Queijos Nobre",
        category: "Especiais",
        badge: "Especialidade",
        basePrice: 58.00,
        hasSizes: true,
        image: "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=600&q=80",
        description: "Base de mussarela derretida, generosas camadas de gorgonzola italiano, provolone defumado artesanal e requeijão Catupiry original."
    },
    {
        id: 4,
        name: "Pizza Pepperoni ao Mel Trufado",
        category: "Especiais",
        badge: "Destaque do Chef",
        basePrice: 64.00,
        hasSizes: true,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80",
        description: "Fatias finas de pepperoni importado levemente picante, mussarela e finalizada com um fio de mel trufado artesanal."
    },
    {
        id: 5,
        name: "Pizza Frango com Catupiry",
        category: "Tradicionais",
        badge: "Favorita",
        basePrice: 52.00,
        hasSizes: true,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        description: "Peito de frango desfiado temperado com ervas finas, coberto com o verdadeiro requeijão cremoso Catupiry e milho verde."
    },
    {
        id: 6,
        name: "Pizza Carne de Sol com Cream Cheese",
        category: "Especiais",
        badge: "Gourmet",
        basePrice: 66.00,
        hasSizes: true,
        image: "https://images.unsplash.com/photo-1595730349658-94fb4301d3b0?auto=format&fit=crop&w=600&q=80",
        description: "Carne de sol desfiada desmanchando na boca, cebola caramelizada no açúcar mascavo e rosetas de cream cheese Philadelphia."
    },
    {
        id: 7,
        name: "Pizza Doce Prestígio Veneziano",
        category: "Doces",
        badge: "Sobremesa",
        basePrice: 54.00,
        hasSizes: true,
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80",
        description: "Massa fina assada com creme de chocolate ao leite nobre derretido, coberta com coco ralado fresco úmido e leite condensado."
    },
    {
        id: 8,
        name: "Pizza Doce de Leite com Morangos",
        category: "Doces",
        badge: "Imperdível",
        basePrice: 56.00,
        hasSizes: true,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
        description: "Doce de leite argentino cremoso espalhado na massa quentinha, rodelas de morangos frescos selecionados e toque de açúcar de confeiteiro."
    },
    {
        id: 9,
        name: "Coca-Cola Zero / Original 2 Litros",
        category: "Bebidas",
        badge: "Gelada",
        basePrice: 14.00,
        hasSizes: false,
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
        description: "Refrigerante garrafa 2 Litros super gelado para acompanhar."
    },
    {
        id: 10,
        name: "Vinho Tinto Chianti Italiano 750ml",
        category: "Bebidas",
        badge: "Harmonização",
        basePrice: 78.00,
        hasSizes: false,
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
        description: "Vinho tinto seco importado da Toscana, perfeito para harmonizar com massas e pizzas especiais."
    }
];

// Tamanhos disponíveis para pizzas
const pizzaSizes = [
    { id: 'broto', name: 'Broto (4 fatias)', multiplier: 0.7, addPrice: 0 },
    { id: 'media', name: 'Média (6 fatias)', multiplier: 1.0, addPrice: 0 },
    { id: 'grande', name: 'Grande (8 fatias)', multiplier: 1.25, addPrice: 12.00 },
    { id: 'familia', name: 'Família (12 fatias)', multiplier: 1.5, mark: 'Recomendado', addPrice: 22.00 }
];

// Bordas recheadas opcionais
const availableCrusts = [
    { id: 'sem', name: 'Sem Borda Recheada', price: 0 },
    { id: 'catupiry', name: 'Borda Recheada de Catupiry Original', price: 9.00 },
    { id: 'cheddar', name: 'Borda Recheada de Cheddar Cremoso', price: 9.00 },
    { id: 'chocolate', name: 'Borda Recheada de Chocolate ao Leite', price: 10.00 }
];

// Estado da Aplicação
let currentCategory = 'Todos';
let cart = JSON.parse(localStorage.getItem('veneza_cart')) || [];
let activeCustomProduct = null;
let couponApplied = false;
let orderType = 'Delivery';

function formatBRL(val) {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function saveCart() {
    localStorage.setItem('veneza_cart', JSON.stringify(cart));
}

// Renderizar Loja
function renderStore() {
    const grid = document.getElementById('store-grid');
    const emptyBox = document.getElementById('empty-store');
    const term = document.getElementById('search-input').value.toLowerCase().trim();

    const filtered = products.filter(p => {
        const matchCat = currentCategory === 'Todos' || p.category === currentCategory;
        const matchSearch = p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term);
        return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '';
        emptyBox.classList.remove('hidden');
        return;
    }

    emptyBox.classList.add('hidden');
    grid.innerHTML = filtered.map(p => `
        <article class="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#D4AF37]/60 transition-all shadow-xl">
            <div>
                <div class="relative h-52 bg-zinc-950 overflow-hidden">
                    <img 
                        src="${p.image}" 
                        onerror="this.src='https://placehold.co/600x400/0A0A0A/D4AF37?text=${encodeURIComponent(p.name)}'"
                        alt="${p.name}" 
                        class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    >
                    ${p.badge ? `
                        <span class="absolute top-3 left-3 bg-[#D4AF37] text-black font-serif font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                            ${p.badge}
                        </span>
                    ` : ''}
                    <span class="absolute bottom-2.5 right-2.5 bg-black/85 text-[#D4AF37] font-serif font-bold text-[10px] uppercase px-2.5 py-1 rounded-lg border border-[#D4AF37]/30">
                        ${p.category}
                    </span>
                </div>
                <div class="p-5">
                    <h3 class="font-serif text-lg font-bold text-white mb-2">${p.name}</h3>
                    <p class="text-zinc-400 text-xs leading-relaxed">${p.description}</p>
                </div>
            </div>

            <div class="px-5 pb-5 pt-3 border-t border-zinc-800/80">
                <div class="flex items-center justify-between mb-3">
                    <span class="text-xs font-bold uppercase text-zinc-500">A partir de</span>
                    <span class="font-serif text-xl font-bold text-[#D4AF37]">${formatBRL(p.basePrice)}</span>
                </div>
                <div class="flex gap-2">
                    ${p.hasSizes ? `
                        <button onclick="openCustomModal(${p.id})" class="flex-1 bg-[#D4AF37] hover:bg-[#AA7C11] text-black font-serif font-bold text-xs uppercase tracking-wider py-3 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md">
                            <i class="fa-solid fa-sliders"></i> Montar Pizza
                        </button>
                    ` : ''}
                    <button onclick="quickAddProduct(${p.id})" class="${p.hasSizes ? 'flex-1' : 'w-full'} bg-zinc-800 hover:bg-zinc-700 text-white font-serif font-bold text-xs uppercase tracking-wider py-3 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 border border-zinc-700">
                        <i class="fa-solid fa-plus"></i> Adicionar
                    </button>
                </div>
            </div>
        </article>
    `).join('');
}

function setCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('.cat-tab').forEach(btn => {
        if (btn.dataset.cat === cat) {
            btn.className = 'cat-tab bg-[#D4AF37] text-black font-serif font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all shadow-md';
        } else {
            btn.className = 'cat-tab bg-black hover:bg-zinc-800 text-zinc-300 font-serif font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl border border-zinc-800 transition-all';
        }
    });
    renderStore();
}

function resetStoreFilters() {
    document.getElementById('search-input').value = '';
    setCategory('Todos');
}

// ==================== MODAL DE PERSONALIZAÇÃO ====================
function openCustomModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    activeCustomProduct = product;
    document.getElementById('modal-product-name').textContent = product.name;
    document.getElementById('modal-product-desc').textContent = product.description;
    document.getElementById('modal-notes').value = '';

    // Renderizar Tamanhos
    const sizesContainer = document.getElementById('sizes-container');
    sizesContainer.innerHTML = pizzaSizes.map((size, idx) => `
        <label class="cursor-pointer">
            <input type="radio" name="pizza-size" value="${size.id}" ${idx === 1 ? 'checked' : ''} onchange="recalculateModalPrice()" class="peer sr-only">
            <div class="text-center p-3 rounded-xl border border-zinc-800 peer-checked:border-[#D4AF37] peer-checked:bg-[#D4AF37]/10 transition-all">
                <span class="block font-serif font-bold text-xs text-white">${size.name.split(' ')[0]}</span>
                <span class="block text-[10px] text-zinc-400 mt-0.5">${size.name.split(' ').slice(1).join(' ')}</span>
            </div>
        </label>
    `).join('');

    // Renderizar Bordas
    const crustsContainer = document.getElementById('crusts-container');
    crustsContainer.innerHTML = availableCrusts.map((crust, idx) => `
        <label class="flex items-center justify-between p-3 rounded-xl border border-zinc-800 hover:border-zinc-700 cursor-pointer transition-colors">
            <div class="flex items-center gap-2.5">
                <input type="radio" name="pizza-crust" value="${crust.id}" data-price="${crust.price}" data-name="${crust.name}" ${idx === 0 ? 'checked' : ''} onchange="recalculateModalPrice()" class="w-4 h-4 accent-[#D4AF37]">
                <span class="text-xs font-semibold text-zinc-300">${crust.name}</span>
            </div>
            <span class="text-xs font-extrabold text-[#D4AF37]">${crust.price === 0 ? 'Grátis' : '+ ' + formatBRL(crust.price)}</span>
        </label>
    `).join('');

    recalculateModalPrice();
    document.getElementById('custom-modal-overlay').classList.remove('hidden');
}

function closeCustomModal() {
    document.getElementById('custom-modal-overlay').classList.add('hidden');
    activeCustomProduct = null;
}

function recalculateModalPrice() {
    if (!activeCustomProduct) return;

    const selectedSizeId = document.querySelector('input[name="pizza-size"]:checked')?.value || 'media';
    const sizeObj = pizzaSizes.find(s => s.id === selectedSizeId);
    
    let unitPrice = (activeCustomProduct.basePrice * sizeObj.multiplier) + sizeObj.addPrice;

    const crustRadio = document.querySelector('input[name="pizza-crust"]:checked');
    if (crustRadio) {
        unitPrice += parseFloat(crustRadio.dataset.price);
    }

    document.getElementById('modal-total-price').textContent = formatBRL(unitPrice);
}

function confirmCustomProduct() {
    if (!activeCustomProduct) return;

    const selectedSizeId = document.querySelector('input[name="pizza-size"]:checked')?.value || 'media';
    const sizeObj = pizzaSizes.find(s => s.id === selectedSizeId);

    const crustRadio = document.querySelector('input[name="pizza-crust"]:checked');
    const crustName = crustRadio ? crustRadio.dataset.name : 'Sem Borda';
    const crustPrice = crustRadio ? parseFloat(crustRadio.dataset.price) : 0;

    let unitPrice = (activeCustomProduct.basePrice * sizeObj.multiplier) + sizeObj.addPrice + crustPrice;
    const notes = document.getElementById('modal-notes').value.trim();

    const detailsStr = `Tamanho: ${sizeObj.name} • Borda: ${crustName}${notes ? ' • Obs: ' + notes : ''}`;
    const uniqueKey = `${activeCustomProduct.id}-${sizeObj.id}-${crustRadio?.id || ' sem'}-${notes}`;

    const existing = cart.find(item => item.key === uniqueKey);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            key: uniqueKey,
            name: activeCustomProduct.name,
            details: detailsStr,
            price: unitPrice,
            qty: 1
        });
    }

    saveCart();
    updateCartUI();
    showToast(`"${activeCustomProduct.name}" adicionado à sacola!`);
    closeCustomModal();
}

function quickAddProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const uniqueKey = `${product.id}-default`;
    const existing = cart.find(item => item.key === uniqueKey);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            key: uniqueKey,
            name: product.name,
            details: 'Padrão (Garrafa/Lata)',
            price: product.basePrice,
            qty: 1
        });
    }

    saveCart();
    updateCartUI();
    showToast(`"${product.name}" adicionado à sacola!`);
}

function addComboToCart(comboName, comboPrice) {
    const uniqueKey = `combo-${comboName}`;
    const existing = cart.find(item => item.key === uniqueKey);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            key: uniqueKey,
            name: comboName,
            details: 'Combo Especial com Desconto',
            price: comboPrice,
            qty: 1
        });
    }

    saveCart();
    updateCartUI();
    showToast(`"${comboName}" adicionado!`);
    toggleCart(true);
}

// ==================== SACOLA & CHECKOUT ====================
function changeQty(key, delta) {
    const index = cart.findIndex(i => i.key === key);
    if (index === -1) return;

    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
}

function removeItem(key) {
    cart = cart.filter(i => i.key !== key);
    saveCart();
    updateCartUI();
}

function applyCoupon() {
    const code = document.getElementById('coupon-input').value.trim().toUpperCase();
    const feedback = document.getElementById('coupon-feedback');
    feedback.classList.remove('hidden');

    if (code === 'VENEZA10') {
        couponApplied = true;
        feedback.textContent = '✓ Cupom VENEZA10 aplicado! 10% de desconto.';
        feedback.className = 'text-xs font-bold mt-1.5 text-[#D4AF37]';
        showToast('Cupom VENEZA10 aplicado com sucesso!');
    } else {
        couponApplied = false;
        feedback.textContent = '✕ Cupom inválido. Tente VENEZA10.';
        feedback.className = 'text-xs font-bold mt-1.5 text-red-500';
    }
    updateTotals();
}

function copyPixKey() {
    const input = document.getElementById('pix-key-input');
    input.select();
    document.execCommand('copy');
    showToast('Chave Pix copiada para a área de transferência!');
}

function setOrderType(type) {
    orderType = type;
    const btnDel = document.getElementById('mode-delivery');
    const btnPick = document.getElementById('mode-pickup');
    const delFields = document.getElementById('delivery-fields');

    if (type === 'Delivery') {
        btnDel.className = 'py-2.5 px-3 rounded-xl border border-[#D4AF37] bg-[#D4AF37] text-black font-serif font-bold text-xs uppercase flex items-center justify-center gap-1.5';
        btnPick.className = 'py-2.5 px-3 rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300 font-serif font-bold text-xs uppercase flex items-center justify-center gap-1.5';
        delFields.classList.remove('hidden');
    } else {
        btnPick.className = 'py-2.5 px-3 rounded-xl border border-[#D4AF37] bg-[#D4AF37] text-black font-serif font-bold text-xs uppercase flex items-center justify-center gap-1.5';
        btnDel.className = 'py-2.5 px-3 rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300 font-serif font-bold text-xs uppercase flex items-center justify-center gap-1.5';
        delFields.classList.add('hidden');
    }
    updateTotals();
}

function handlePaymentChange() {
    const method = document.getElementById('pay-method').value;
    const pixBox = document.getElementById('pix-box');
    const changeBox = document.getElementById('change-box');

    pixBox.classList.toggle('hidden', method !== 'Pix');
    changeBox.classList.toggle('hidden', method !== 'Dinheiro');
}

function updateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const discount = couponApplied ? subtotal * 0.10 : 0;
    const deliveryFee = orderType === 'Delivery' ? parseFloat(document.getElementById('cust-neighborhood').value || 6) : 0;
    const total = Math.max(0, subtotal - discount + deliveryFee);

    document.getElementById('summary-subtotal').textContent = formatBRL(subtotal);

    const discountRow = document.getElementById('summary-discount-row');
    if (couponApplied && subtotal > 0) {
        discountRow.classList.remove('hidden');
        document.getElementById('summary-discount').textContent = `- ${formatBRL(discount)}`;
    } else {
        discountRow.classList.add('hidden');
    }

    document.getElementById('summary-delivery').textContent = deliveryFee === 0 ? 'Grátis' : formatBRL(deliveryFee);
    document.getElementById('summary-total').textContent = formatBRL(total);

    return { subtotal, discount, deliveryFee, total };
}

function updateCartUI() {
    const badge = document.getElementById('cart-badge');
    const list = document.getElementById('cart-items-list');
    const checkoutSec = document.getElementById('checkout-section');

    const totalQty = cart.reduce((acc, i) => acc + i.qty, 0);
    badge.textContent = totalQty;

    if (cart.length === 0) {
        checkoutSec.classList.add('hidden');
        list.innerHTML = `
            <div class="text-center py-12 space-y-3">
                <div class="w-16 h-16 rounded-full bg-zinc-900 mx-auto flex items-center justify-center text-zinc-600 text-2xl border border-zinc-800">
                    <i class="fa-solid fa-bag-shopping"></i>
                </div>
                <p class="font-serif text-base text-zinc-300">Sua sacola está vazia</p>
                <p class="text-xs text-zinc-500 max-w-xs mx-auto">Adicione pizzas ou combos deliciosos do nosso cardápio para iniciar seu pedido.</p>
            </div>
        `;
        return;
    }

    checkoutSec.classList.remove('hidden');
    list.innerHTML = cart.map(item => `
        <div class="bg-zinc-900 p-3.5 rounded-xl border border-zinc-800 flex items-start justify-between gap-3">
            <div class="flex-1">
                <h4 class="font-serif text-sm font-bold text-white">${item.name}</h4>
                ${item.details ? `<p class="text-[11px] text-zinc-400 mt-0.5 leading-snug">${item.details}</p>` : ''}
                <span class="inline-block font-extrabold text-xs text-[#D4AF37] mt-1.5">${formatBRL(item.price * item.qty)}</span>
            </div>
            <div class="flex flex-col items-end gap-2">
                <button onclick="removeItem('${item.key.replace(/'/g, "\'")}')" class="text-zinc-500 hover:text-red-500 text-xs" title="Remover">
                    <i class="fa-solid fa-trash"></i>
                </button>
                <div class="flex items-center gap-1.5 bg-black border border-zinc-800 rounded-lg p-1">
                    <button onclick="changeQty('${item.key.replace(/'/g, "\'")}', -1)" class="w-6 h-6 rounded bg-zinc-900 hover:bg-red-600 hover:text-white text-xs font-bold flex items-center justify-center">
                        -
                    </button>
                    <span class="font-bold text-xs w-5 text-center text-white">${item.qty}</span>
                    <button onclick="changeQty('${item.key.replace(/'/g, "\'")}', 1)" class="w-6 h-6 rounded bg-zinc-900 hover:bg-[#D4AF37] hover:text-black text-xs font-bold flex items-center justify-center">
                        +
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    updateTotals();
}

function finalizeOrder(event) {
    event.preventDefault();
    if (cart.length === 0) return;

    const name = document.getElementById('cust-name').value.trim();
    const whatsapp = document.getElementById('cust-whatsapp').value.trim();
    const payment = document.getElementById('pay-method').value;
    const cashChange = document.getElementById('cash-change').value.trim();

    let addressText = 'Retirada no Balcão (Av. Paulista, 1000)';
    if (orderType === 'Delivery') {
        const street = document.getElementById('cust-street').value.trim();
        const number = document.getElementById('cust-number').value.trim();
        const comp = document.getElementById('cust-comp').value.trim();
        const neighSelect = document.getElementById('cust-neighborhood');
        const neighName = neighSelect.options[neighSelect.selectedIndex].dataset.name;

        if (!street || !number) {
            showToast('Por favor, preencha Rua e Número para entrega!');
            document.getElementById('cust-street').focus();
            return;
        }
        addressText = `${street}, nº ${number}${comp ? ' (' + comp + ')' : ''} - Bairro: ${neighName}`;
    }

    const { discount, deliveryFee, total } = updateTotals();
    const orderNumber = Math.floor(1000 + Math.random() * 9000);

    document.getElementById('order-number-display').textContent = orderNumber;
    const itemsSummaryHtml = cart.map(i => `<div>• <strong>${i.qty}x ${i.name}</strong> — ${formatBRL(i.price * i.qty)}</div>`).join('');
    
    document.getElementById('order-receipt-box').innerHTML = `
        <p><strong>Cliente:</strong> ${name} (${whatsapp})</p>
        <p><strong>Modalidade:</strong> ${orderType}</p>
        <p><strong>Endereço:</strong> ${addressText}</p>
        <p><strong>Pagamento:</strong> ${payment}${payment === 'Dinheiro' && cashChange ? ' (' + cashChange + ')' : ''}</p>
        <hr class="my-2 border-zinc-800">
        ${itemsSummaryHtml}
        <hr class="my-2 border-zinc-800">
        ${couponApplied ? `<p class="text-[#D4AF37]"><strong>Desconto VENEZA10:</strong> -${formatBRL(discount)}</p>` : ''}
        <p><strong>Taxa Entrega:</strong> ${deliveryFee === 0 ? 'Grátis' : formatBRL(deliveryFee)}</p>
        <p class="text-sm font-bold text-[#D4AF37] pt-1">Total: ${formatBRL(total)}</p>
    `;

    let waText = `🍕 *NOVO PEDIDO #${orderNumber} - VENEZA PIZZARIA*\n\n`;
    waText += `*Cliente:* ${name}\n`;
    waText += `*Modalidade:* ${orderType}\n`;
    waText += `*Endereço:* ${addressText}\n\n`;
    waText += `*Itens:*\n`;
    cart.forEach(i => {
        waText += `• ${i.qty}x ${i.name} (${formatBRL(i.price * i.qty)})\n`;
        if (i.details) waText += `  _${i.details}_\n`;
    });
    waText += `\n*Pagamento:* ${payment}${payment === 'Dinheiro' && cashChange ? ' - ' + cashChange : ''}\n`;
    if (couponApplied) waText += `*Cupom:* VENEZA10 (-${formatBRL(discount)})\n`;
    waText += `*Total:* ${formatBRL(total)}`;

    document.getElementById('send-whatsapp-receipt-btn').href = `https://wa.me/5511999999999?text=${encodeURIComponent(waText)}`;

    cart = [];
    couponApplied = false;
    saveCart();
    updateCartUI();
    toggleCart(false);

    document.getElementById('order-success-modal').classList.remove('hidden');
}

function closeSuccessModal() {
    document.getElementById('order-success-modal').classList.add('hidden');
}

function toggleCart(forceOpen = null) {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    const isHidden = drawer.classList.contains('translate-x-full');

    if (forceOpen === true || (forceOpen === null && isHidden)) {
        drawer.classList.remove('translate-x-full');
        overlay.classList.remove('hidden');
    } else {
        drawer.classList.add('translate-x-full');
        overlay.classList.add('hidden');
    }
}

function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

function handleFooterContact(event) {
    event.preventDefault();
    const name = document.getElementById('f-name').value;
    showToast(`Obrigado, ${name}! Mensagem enviada para a Veneza Pizzaria.`);
    event.target.reset();
}

let toastTimer;
function showToast(message) {
    const box = document.getElementById('toast-box');
    const text = document.getElementById('toast-text');
    text.textContent = message;

    box.classList.remove('opacity-0', 'translate-y-4');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        box.classList.add('opacity-0', 'translate-y-4');
    }, 3000);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderStore();
    updateCartUI();
});
