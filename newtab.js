'use strict';

// ─── Quotes ────────────────────────────────────────────────────────────────
const QUOTES = [
    { author: "Abraham Lincoln", text: "Give me six hours to chop down a tree and I will spend the first four sharpening the axe." },
    { author: "Abraham Lincoln", text: "I walk slowly, but I never walk backward." },
    { author: "Abraham Lincoln", text: "Be sure you put your feet in the right place, then stand firm." },
    { author: "Abraham Lincoln", text: "The best thing about the future is that it only comes one day at a time." },
    { author: "Abraham Lincoln", text: "Most folks are about as happy as they make up their minds to be." },
    { author: "Aesop", text: "No act of kindness, no matter how small, is ever wasted." },
    { author: "Albert Einstein", text: "Life is like riding a bicycle. To keep your balance you must keep moving." },
    { author: "Albert Einstein", text: "Imagination is everything. It is the preview of life's coming attractions." },
    { author: "Albert Einstein", text: "The true sign of intelligence is not knowledge but imagination." },
    { author: "Albert Einstein", text: "If you can't explain it simply, you don't understand it well enough." },
    { author: "Albert Einstein", text: "A person who never made a mistake never tried anything new." },
    { author: "Alan Watts", text: "No valid plans for the future can be made by those who have no capacity for living now." },
    { author: "Anaïs Nin", text: "Life shrinks or expands in proportion to one's courage." },
    { author: "Anaïs Nin", text: "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery." },
    { author: "André Gide", text: "One does not discover new lands without consenting to lose sight of the shore for a very long time." },
    { author: "Andy Warhol", text: "They say that time changes things, but you actually have to change them yourself." },
    { author: "Annie Dillard", text: "How we spend our days is, of course, how we spend our lives." },
    { author: "Aristotle", text: "Happiness depends upon ourselves." },
    { author: "Aristotle", text: "The energy of the mind is the essence of life." },
    { author: "Aristotle", text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit." },
    { author: "Bertrand Russell", text: "The good life is one inspired by love and guided by knowledge." },
    { author: "Bill Gates", text: "Success is a lousy teacher. It seduces smart people into thinking they can't lose." },
    { author: "Bodhidharma", text: "All know the way; few actually walk it." },
    { author: "Bruce Lee", text: "If you love life, don't waste time, for time is what life is made up of." },
    { author: "Bruce Lee", text: "Do not pray for an easy life, pray for the strength to endure a difficult one." },
    { author: "Bruce Lee", text: "Be happy, but never satisfied." },
    { author: "Bruce Lee", text: "Knowing is not enough, we must apply. Willing is not enough, we must do." },
    { author: "Buckminster Fuller", text: "You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete." },
    { author: "Buddha", text: "The mind is everything. What you think you become." },
    { author: "Buddha", text: "Peace comes from within. Do not seek it without." },
    { author: "Buddha", text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment." },
    { author: "Buddha", text: "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path." },
    { author: "Buddha", text: "Three things cannot be long hidden: the sun, the moon, and the truth." },
    { author: "Carl Jung", text: "Your vision will become clear only when you look into your heart. Who looks outside, dreams. Who looks inside, awakens." },
    { author: "Carl Jung", text: "Everything that irritates us about others can lead us to an understanding of ourselves." },
    { author: "Chinese proverb", text: "A gem cannot be polished without friction, nor a man perfected without trials." },
    { author: "Confucius", text: "Life is really simple, but we insist on making it complicated." },
    { author: "Confucius", text: "Our greatest glory is not in never falling, but in rising every time we fall." },
    { author: "Confucius", text: "I hear and I forget. I see and I remember. I do and I understand." },
    { author: "Dalai Lama", text: "Be kind whenever possible. It is always possible." },
    { author: "Dalai Lama", text: "Happiness is not something ready made. It comes from your own actions." },
    { author: "Dalai Lama", text: "Remember that sometimes not getting what you want is a wonderful stroke of luck." },
    { author: "Dale Carnegie", text: "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all." },
    { author: "Deepak Chopra", text: "When you make a choice, you change the future." },
    { author: "Dr. Seuss", text: "Don't cry because it's over. Smile because it happened." },
    { author: "E. E. Cummings", text: "It takes courage to grow up and become who you really are." },
    { author: "Eckhart Tolle", text: "The past has no power to stop you from being present now. Only your grievance about the past can do that." },
    { author: "Eckhart Tolle", text: "It is not uncommon for people to spend their whole life waiting to start living." },
    { author: "Eleanor Roosevelt", text: "Do one thing every day that scares you." },
    { author: "Eleanor Roosevelt", text: "The future belongs to those who believe in the beauty of their dreams." },
    { author: "Eleanor Roosevelt", text: "No one can make you feel inferior without your consent." },
    { author: "Eleanor Roosevelt", text: "You must do the things you think you cannot do." },
    { author: "Epictetus", text: "Make the best use of what is in your power, and take the rest as it happens." },
    { author: "Epictetus", text: "It is impossible for a man to learn what he thinks he already knows." },
    { author: "Florence Nightingale", text: "I attribute my success to this: I never gave or took an excuse." },
    { author: "Franklin Roosevelt", text: "The only limit to our realization of tomorrow will be our doubts of today." },
    { author: "Frederick Douglass", text: "If there is no struggle, there is no progress." },
    { author: "George Bernard Shaw", text: "A life spent making mistakes is not only more honourable, but more useful than a life spent doing nothing." },
    { author: "George Bernard Shaw", text: "Life is not about finding yourself. Life is about creating yourself." },
    { author: "George Eliot", text: "It is never too late to be what you might have been." },
    { author: "George Eliot", text: "What do we live for, if it is not to make life less difficult for each other?" },
    { author: "Goethe", text: "Just trust yourself, then you will know how to live." },
    { author: "Harriet Tubman", text: "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world." },
    { author: "Henry Ford", text: "If you think you can, you can. And if you think you can't, you're right." },
    { author: "Henry David Thoreau", text: "The price of anything is the amount of life you exchange for it." },
    { author: "Henry David Thoreau", text: "Go confidently in the direction of your dreams. Live the life you have imagined." },
    { author: "Heraclitus", text: "The only constant in life is change." },
    { author: "Iris Murdoch", text: "We can only learn to love by loving." },
    { author: "J.K. Rowling", text: "Rock bottom became the solid foundation on which I rebuilt my life." },
    { author: "Jim Rohn", text: "Either you run the day or the day runs you." },
    { author: "Jim Rohn", text: "Successful people do what unsuccessful people are not willing to do." },
    { author: "John F. Kennedy", text: "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them." },
    { author: "John Lennon", text: "Life is what happens while you are making other plans." },
    { author: "John Wooden", text: "Never mistake activity for achievement." },
    { author: "Jon Kabat-Zinn", text: "You can't stop the waves, but you can learn to surf." },
    { author: "Kahlil Gibran", text: "Let there be spaces in your togetherness." },
    { author: "Ken Robinson", text: "If you're not prepared to be wrong, you'll never come up with anything original." },
    { author: "Lao Tzu", text: "The journey of a thousand miles begins with one step." },
    { author: "Lao Tzu", text: "When you realize there is nothing lacking, the whole world belongs to you." },
    { author: "Lao Tzu", text: "Silence is a source of great strength." },
    { author: "Lao Tzu", text: "A leader is best when people barely know he exists; when his work is done, they will say: we did it ourselves." },
    { author: "Lao Tzu", text: "He who knows himself is enlightened." },
    { author: "Leonardo da Vinci", text: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do." },
    { author: "Leo Tolstoy", text: "Everyone thinks of changing the world, but no one thinks of changing himself." },
    { author: "Les Brown", text: "Shoot for the moon. Even if you miss, you'll land among the stars." },
    { author: "Mahatma Gandhi", text: "Be the change that you wish to see in the world." },
    { author: "Mahatma Gandhi", text: "The future depends on what you do today." },
    { author: "Mahatma Gandhi", text: "Live as if you were to die tomorrow. Learn as if you were to live forever." },
    { author: "Marcus Aurelius", text: "You have power over your mind, not outside events. Realize this, and you will find strength." },
    { author: "Marcus Aurelius", text: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking." },
    { author: "Marcus Aurelius", text: "Waste no more time arguing about what a good man should be. Be one." },
    { author: "Marcus Aurelius", text: "When you arise in the morning, think of what a precious privilege it is to be alive." },
    { author: "Mark Twain", text: "Kindness is the language which the deaf can hear and the blind can see." },
    { author: "Mark Twain", text: "It is not the size of the dog in the fight, it is the size of the fight in the dog." },
    { author: "Maya Angelou", text: "If you don't like something, change it. If you can't change it, change your attitude." },
    { author: "Maya Angelou", text: "Nothing will work unless you do." },
    { author: "Maya Angelou", text: "You can't use up creativity. The more you use, the more you have." },
    { author: "Mother Teresa", text: "Be faithful in small things because it is in them that your strength lies." },
    { author: "Mother Teresa", text: "Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing." },
    { author: "Napoleon Hill", text: "A goal is a dream with a deadline." },
    { author: "Napoleon Hill", text: "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit." },
    { author: "Nelson Mandela", text: "As we are liberated from our own fear, our presence automatically liberates others." },
    { author: "Nietzsche", text: "That which does not kill us makes us stronger." },
    { author: "Nora Roberts", text: "If you don't go after what you want, you'll never have it. If you don't step forward, you're always in the same place." },
    { author: "Oprah Winfrey", text: "The biggest adventure you can ever take is to live the life of your dreams." },
    { author: "Oscar Wilde", text: "Be yourself; everyone else is already taken." },
    { author: "Oscar Wilde", text: "Experience is simply the name we give our mistakes." },
    { author: "Pablo Picasso", text: "Everything you can imagine is real." },
    { author: "Pablo Picasso", text: "Inspiration exists, but it has to find us working." },
    { author: "Peter Drucker", text: "The best way to predict your future is to create it." },
    { author: "Ralph Waldo Emerson", text: "Happiness is a perfume you cannot pour on others without getting a few drops on yourself." },
    { author: "Ralph Waldo Emerson", text: "What lies behind us and what lies before us are tiny matters compared to what lies within us." },
    { author: "Ralph Waldo Emerson", text: "Nothing great was ever achieved without enthusiasm." },
    { author: "Richard Feynman", text: "What I cannot create, I do not understand." },
    { author: "Robert Frost", text: "In three words I can sum up everything I've learned about life: it goes on." },
    { author: "Robert Frost", text: "The best way out is always through." },
    { author: "Rumi", text: "Let the beauty of what you love be what you do." },
    { author: "Rumi", text: "Be like a tree and let the dead leaves drop." },
    { author: "Rumi", text: "Don't grieve. Anything you lose comes round in another form." },
    { author: "Seneca", text: "Luck is what happens when preparation meets opportunity." },
    { author: "Seneca", text: "We suffer more often in imagination than in reality." },
    { author: "Seneca", text: "It is the power of the mind to be unconquerable." },
    { author: "Socrates", text: "Wisdom begins in wonder." },
    { author: "Søren Kierkegaard", text: "Life can only be understood backwards; but it must be lived forwards." },
    { author: "Steve Jobs", text: "Stay hungry. Stay foolish." },
    { author: "Steve Jobs", text: "Your work is going to fill a large part of your life. The only way to be truly satisfied is to do what you believe is great work." },
    { author: "Thich Nhat Hanh", text: "Smile, breathe, and go slowly." },
    { author: "Thich Nhat Hanh", text: "There is no way to happiness — happiness is the way." },
    { author: "Tony Robbins", text: "It is in your moments of decision that your destiny is shaped." },
    { author: "Victor Frankl", text: "When we are no longer able to change a situation, we are challenged to change ourselves." },
    { author: "Voltaire", text: "Think for yourselves and let others enjoy the privilege to do so too." },
    { author: "Wayne Dyer", text: "If you change the way you look at things, the things you look at change." },
    { author: "William James", text: "Act as if what you do makes a difference. It does." },
    { author: "Winston Churchill", text: "Never, never, never give up." },
    { author: "Winston Churchill", text: "The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty." },
    { author: "Zig Ziglar", text: "Your attitude, not your aptitude, will determine your altitude." },
    { author: "Yoda", text: "Do, or do not. There is no try." },
];

// ─── Constants ──────────────────────────────────────────────────────────────
const STORAGE_KEY = 'fuongz_just_random_quote';

const DEFAULT_CONFIG = {
    bgColor: '#18181b',
    quoteFontFamily: 'playfair-display',
    authorFontFamily: 'montserrat',
};

const PRESET_COLORS = ['#fff', '#18181b', '#1e3a8a', '#312e81', '#166534', '#7f1d1d'];

const FONT_FAMILIES = [
    { label: 'OS Default', value: 'sans' },
    { label: 'Playfair Display', value: 'playfair-display' },
    { label: 'Space Grotesk', value: 'space-grotesk' },
    { label: 'Montserrat', value: 'montserrat' },
    { label: 'Proza Libre', value: 'proza-libre' },
    { label: 'Rubik', value: 'rubik' },
    { label: 'Roboto', value: 'roboto' },
    { label: 'Oswald', value: 'oswald' },
    { label: 'DM Sans', value: 'dm-sans' },
    { label: 'Inter', value: 'inter' },
    { label: 'Numans', value: 'numans' },
    { label: 'Be Vietnam Pro', value: 'be-vietnam-pro' },
];

const FONT_GOOGLE_MAP = {
    'playfair-display': 'Playfair+Display:wght@500',
    'space-grotesk': 'Space+Grotesk:wght@400;500',
    'montserrat': 'Montserrat:wght@400;500;600',
    'proza-libre': 'Proza+Libre',
    'rubik': 'Rubik:wght@500',
    'roboto': 'Roboto',
    'oswald': 'Oswald:wght@400;500',
    'dm-sans': 'DM+Sans:wght@400;500',
    'inter': 'Inter:wght@500',
    'numans': 'Numans',
    'be-vietnam-pro': 'Be+Vietnam+Pro:wght@400;500',
};

const FONT_CSS_MAP = {
    'sans': 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    'playfair-display': '"Playfair Display", serif',
    'space-grotesk': '"Space Grotesk", sans-serif',
    'montserrat': '"Montserrat", sans-serif',
    'proza-libre': '"Proza Libre", sans-serif',
    'rubik': '"Rubik", sans-serif',
    'roboto': '"Roboto", sans-serif',
    'oswald': '"Oswald", sans-serif',
    'dm-sans': '"DM Sans", sans-serif',
    'inter': '"Inter", sans-serif',
    'numans': '"Numans", sans-serif',
    'be-vietnam-pro': '"Be Vietnam Pro", sans-serif',
};

// ─── State ──────────────────────────────────────────────────────────────────
let config = { ...DEFAULT_CONFIG };
let currentQuote = null;
let loadedFonts = new Set();
let settingsOpen = false;

// ─── Helpers ────────────────────────────────────────────────────────────────
function getRandomQuote() {
    return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}

function getLuminance(hexColor) {
    if (!hexColor || !hexColor.startsWith('#')) return 0;
    const hex = hexColor.replace('#', '');
    const full = hex.length === 3
        ? hex.split('').map(c => c + c).join('')
        : hex;
    const r = parseInt(full.substr(0, 2), 16) / 255;
    const g = parseInt(full.substr(2, 2), 16) / 255;
    const b = parseInt(full.substr(4, 2), 16) / 255;
    const lin = c => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
    return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

function isDark(color) {
    return getLuminance(color) < 0.179;
}

function loadFont(fontValue) {
    if (fontValue === 'sans' || loadedFonts.has(fontValue) || !FONT_GOOGLE_MAP[fontValue]) return;
    loadedFonts.add(fontValue);
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${FONT_GOOGLE_MAP[fontValue]}&display=swap`;
    document.head.appendChild(link);
}

// ─── Storage ─────────────────────────────────────────────────────────────────
async function loadConfig() {
    try {
        if (typeof browser !== 'undefined' && browser.storage) {
            const result = await browser.storage.local.get(STORAGE_KEY);
            const saved = result[STORAGE_KEY];
            return saved ? { ...DEFAULT_CONFIG, ...saved } : { ...DEFAULT_CONFIG };
        }
    } catch (_) { /* fall through */ }
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? { ...DEFAULT_CONFIG, ...JSON.parse(raw) } : { ...DEFAULT_CONFIG };
    } catch (_) {
        return { ...DEFAULT_CONFIG };
    }
}

async function saveConfig() {
    try {
        if (typeof browser !== 'undefined' && browser.storage) {
            await browser.storage.local.set({ [STORAGE_KEY]: config });
            return;
        }
    } catch (_) { /* fall through */ }
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch (_) { /* ignore */ }
}

// ─── DOM helpers ─────────────────────────────────────────────────────────────
function showQuoteSkeleton(show) {
    document.getElementById('quote-skeleton').classList.toggle('hidden', !show);
    document.getElementById('quote-text').classList.toggle('hidden', show);
}

function showAuthorSkeleton(show) {
    document.getElementById('author-skeleton').classList.toggle('hidden', !show);
    document.getElementById('quote-author').classList.toggle('hidden', show);
}

// ─── Render ──────────────────────────────────────────────────────────────────
function renderQuote() {
    if (!currentQuote) return;
    document.getElementById('quote-text').textContent = `\u201C${currentQuote.text}\u201D`;
    document.getElementById('quote-author').textContent = `\u2014 ${currentQuote.author}`;
}

function updateAppearance() {
    const dark = isDark(config.bgColor);

    document.getElementById('app').style.backgroundColor = config.bgColor;

    document.getElementById('quote-text').style.color = dark ? '#ffffff' : '#18181b';
    document.getElementById('quote-author').style.color = dark ? '#d4d4d8' : '#18181b';
    document.getElementById('settings-btn').style.color = dark ? '#e4e4e7' : '#18181b';
    document.getElementById('credit').style.color = dark ? '#a1a1aa' : '#71717a';

    // Update skeleton colours
    document.querySelectorAll('.skeleton').forEach(el => {
        el.classList.toggle('skeleton-dark', dark);
        el.classList.toggle('skeleton-light', !dark);
    });

    // Update active swatch highlight
    document.querySelectorAll('.color-swatch').forEach(el => {
        el.classList.toggle('active', el.dataset.color === config.bgColor);
    });

    const customSwatch = document.getElementById('custom-swatch');
    if (customSwatch) {
        const isCustom = !PRESET_COLORS.includes(config.bgColor);
        customSwatch.classList.toggle('active', isCustom);
        const inner = customSwatch.querySelector('.color-custom-inner');
        if (isCustom) {
            inner.style.backgroundColor = config.bgColor;
            inner.style.border = '1px solid transparent';
            inner.textContent = '';
        } else {
            inner.style.backgroundColor = '';
            inner.style.border = '1px dashed #a1a1aa';
            inner.textContent = '+';
        }
    }
}

function updateFonts() {
    document.getElementById('quote-text').style.fontFamily =
        FONT_CSS_MAP[config.quoteFontFamily] || FONT_CSS_MAP.sans;
    document.getElementById('quote-author').style.fontFamily =
        FONT_CSS_MAP[config.authorFontFamily] || FONT_CSS_MAP.sans;
}

// ─── Settings UI ─────────────────────────────────────────────────────────────
function buildColorSwatches() {
    const container = document.getElementById('color-swatches');
    container.innerHTML = '';

    PRESET_COLORS.forEach(color => {
        const swatch = document.createElement('div');
        swatch.className = 'color-swatch';
        swatch.dataset.color = color;
        if (color === config.bgColor) swatch.classList.add('active');

        const inner = document.createElement('div');
        inner.className = 'color-swatch-inner';
        inner.style.backgroundColor = color;
        if (color === '#fff') inner.style.border = '1px solid #d4d4d8';

        swatch.appendChild(inner);
        swatch.addEventListener('click', () => {
            config.bgColor = color;
            saveConfig();
            updateAppearance();
        });
        container.appendChild(swatch);
    });

    // Custom colour picker
    const custom = document.createElement('div');
    custom.className = 'color-custom';
    custom.id = 'custom-swatch';
    const isCustom = !PRESET_COLORS.includes(config.bgColor);
    if (isCustom) custom.classList.add('active');

    const inner = document.createElement('div');
    inner.className = 'color-custom-inner';
    if (isCustom) {
        inner.style.backgroundColor = config.bgColor;
        inner.style.border = '1px solid transparent';
    } else {
        inner.textContent = '+';
    }

    const input = document.createElement('input');
    input.type = 'color';
    input.className = 'color-custom-input';
    input.value = isCustom ? config.bgColor : '#000000';
    input.addEventListener('input', e => {
        config.bgColor = e.target.value;
        saveConfig();
        updateAppearance();
    });

    custom.appendChild(inner);
    custom.appendChild(input);
    container.appendChild(custom);
}

function buildFontSelects() {
    ['quote-font-select', 'author-font-select'].forEach(id => {
        const sel = document.getElementById(id);
        sel.innerHTML = '';
        FONT_FAMILIES.forEach(({ label, value }) => {
            const opt = document.createElement('option');
            opt.value = value;
            opt.textContent = label;
            sel.appendChild(opt);
        });
    });

    const quoteSelect = document.getElementById('quote-font-select');
    const authorSelect = document.getElementById('author-font-select');

    quoteSelect.value = config.quoteFontFamily;
    authorSelect.value = config.authorFontFamily;

    quoteSelect.addEventListener('change', e => {
        config.quoteFontFamily = e.target.value;
        loadFont(config.quoteFontFamily);
        saveConfig();
        showQuoteSkeleton(true);
        setTimeout(() => { updateFonts(); showQuoteSkeleton(false); }, 500);
    });

    authorSelect.addEventListener('change', e => {
        config.authorFontFamily = e.target.value;
        loadFont(config.authorFontFamily);
        saveConfig();
        showAuthorSkeleton(true);
        setTimeout(() => { updateFonts(); showAuthorSkeleton(false); }, 500);
    });
}

function toggleSettings() {
    settingsOpen = !settingsOpen;
    document.getElementById('settings-panel').classList.toggle('hidden', !settingsOpen);
    document.getElementById('settings-btn').classList.toggle('active', settingsOpen);
}

function setupEventListeners() {
    const btn = document.getElementById('settings-btn');
    const panel = document.getElementById('settings-panel');

    btn.addEventListener('click', e => { e.stopPropagation(); toggleSettings(); });

    btn.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleSettings(); }
    });

    document.addEventListener('click', e => {
        if (settingsOpen && !panel.contains(e.target) && !btn.contains(e.target)) {
            settingsOpen = false;
            panel.classList.add('hidden');
            btn.classList.remove('active');
        }
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && settingsOpen) {
            settingsOpen = false;
            panel.classList.add('hidden');
            btn.classList.remove('active');
        }
    });
}

// ─── Init ────────────────────────────────────────────────────────────────────
async function init() {
    config = await loadConfig();
    currentQuote = getRandomQuote();

    loadFont(config.quoteFontFamily);
    loadFont(config.authorFontFamily);

    renderQuote();
    updateAppearance();
    updateFonts();

    buildColorSwatches();
    buildFontSelects();
    setupEventListeners();
}

document.addEventListener('DOMContentLoaded', init);
