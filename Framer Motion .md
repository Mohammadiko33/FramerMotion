# 📘 راهنمای جامع انیمیشن در ریاکت با Framer Motion

## 🔧 راه‌اندازی اولیه
```bash
npm install framer-motion
```

## 🎬 مفاهیم پایه
```jsx
import { motion, AnimatePresence, useCycle } from "framer-motion";
```

### 🏁 خصوصیات اولیه و انیمیشن
```jsx
<motion.div
  initial={{ opacity: 0, y: -50 }} // حالت اولیه
  animate={{ opacity: 1, y: 0 }}   // حالت نهایی
  transition={{ duration: 0.5 }}   // تنظیمات انتقال
>
  انیمیشن تستی!
</motion.div>
```

## 🎚️ ویژگی‌های پیشرفته
### تبدیل‌های پیچیده
```jsx
<motion.div
  animate={{
    rotate: 360,       // چرخش کامل
    scale: 1.2,        // اندازه 120%
    skewX: 15,         // کج شدن 15 درجه
    borderRadius: "50%" // تبدیل به دایره
  }}
/>
```

### 🤏 انیمیشن‌های لمسی
```jsx
<motion.button
  whileHover={{ scale: 1.1 }}  // هنگام هاور
  whileTap={{ scale: 0.9 }}    // هنگام کلیک
  drag                         // قابلیت درگ
  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} // محدودیت حرکتی
>
  منو بکش!
</motion.button>
```

## 🧬 سیستم Variants (توصیه شده)
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // تأخیر بین فرزندان
      when: "beforeChildren" // زمانبندی اجرا
    }
  }
};

const itemVariants = {
  hidden: { y: 20 }, // حالت اولیه آیتم
  visible: { y: 0 }   // حالت نهایی آیتم
};

<motion.ul
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {items.map(item => (
    <motion.li key={item.id} variants={itemVariants}>
      {item.text}
    </motion.li>
  ))}
</motion.ul>
```

## 🔄 انواع Transition
| نوع       | بهترین کاربرد       | ویژگی‌های نمونه              |
|-----------|--------------------|-----------------------------|
| `tween`   | فید/حرکت‌های ساده   | duration, ease              |
| `spring`  | حرکات فیزیکی       | stiffness, damping, mass    |
| `inertia` | حرکات پیوسته       | velocity, min, max          |
| `keyframes`| دنباله‌های پیچیده | values: [0, 1, 0]          |

## 🚪 انیمیشن‌های خروج
```jsx
<AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} // انیمیشن خروج
    >
      محتوا
    </motion.div>
  )}
</AnimatePresence>
```

## 🛠️ نکات حرفه‌ای
1. **بهینه‌سازی عملکرد**
```jsx
<motion.div layout> {/* انیمیشن خودکار تغییرات چیدمان */}
  <Component />
</motion.div>
```

2. **انیمیشن SVG**
```jsx
<motion.svg
  initial={{ rotate: -180 }}
  animate={{ rotate: 0 }}
>
  <motion.path
    d="M20,20 L80,80"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }} // انیمیشن رسم مسیر
  />
</motion.svg>
```

## 🚀 الگوهای پیشرفته
### انتقال بین صفحات
```jsx
function App() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}
```

### انیمیشن‌های وابسته به اسکرول
```jsx
const { scrollYProgress } = useScroll();

<motion.div
  style={{ scaleX: scrollYProgress }} // تغییر مقیاس بر اساس اسکرول
/>
```

## 📚 بهترین روش‌ها
- از Variants برای دنباله‌های پیچیده استفاده کنید
- برای انیمیشن‌های ظاهر/ناپدید شدن از AnimatePresence استفاده کنید
- ترکیب با CSS Transitions برای افکت‌های پیچیده
- استفاده از prop layout برای انیمیشن‌های خودکار چیدمان

## ⚠️ خطاهای رایج
1. فراموش کردن AnimatePresence برای انیمیشن خروج
2. عدم پاک‌سازی event listenerها در useCycle
3. استفاده بیش از حد از انیمیشن‌های spring پیچیده
4. عدم توجه به عملکرد در موبایل
5. نادیده گرفتن تنظیمات کاهش حرکت

## 📈 جدول مرجع سریع
| ویژگی          | مقادیر مجاز         |
|----------------|---------------------|
| opacity        | 0-1                 |
| scale          | 0.5-2               |
| rotate         | 0-360 (درجه)       |
| x/y            | هر مقدار پیکسلی    |
| borderRadius   | px/%                |
| boxShadow      | مقادیر رشته‌ای     |
| pathLength     | 0-1 (فقط SVG)      |
| filter         | blur, brightness و... |

آخرین بروزرسانی: تیر ۱۴۰۴ | نسخه ۱۰+ Framer Motion