# 📘 Framer Motion Ultimate Guide - React Animations

## 🔧 Basic Setup
```bash
npm install framer-motion
```

## 🎬 Core Concepts
```jsx
import { motion, AnimatePresence, useCycle } from "framer-motion";
```

### 🏁 Initial & Animate Props
```jsx
<motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Hello Animation!
</motion.div>
```
- `initial`: Starting point of animation
- `animate`: End state of animation
- `transition`: Controls animation behavior

## 🎚️ Advanced Properties
### Transformations
```jsx
<motion.div
  animate={{
    rotate: 360,       // Full rotation
    scale: 1.2,        // 120% size
    skewX: 15,         // 15deg skew
    borderRadius: "50%" 
  }}
/>
```

### 🤏 Gesture Animations
```jsx
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  drag
  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
>
  Drag Me!
</motion.button>
```

## 🧬 Variants System (Recommended)
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20 },
  visible: { y: 0 }
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

## 🔄 Transition Types
| Type      | Best For          | Example Properties              |
|-----------|-------------------|----------------------------------|
| `tween`   | Fades/Movements   | duration, ease                   |
| `spring`  | Physical motions  | stiffness, damping, mass         |
| `inertia` | Continuous movement | velocity, min, max             |
| `keyframes`| Complex sequences | values: [0, 1, 0]               |

```jsx
<motion.div
  animate={{ x: 100 }}
  transition={{
    type: "spring",
    stiffness: 100,
    damping: 10
  }}
/>
```

## 🚪 Exit Animations
```jsx
<AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Content
    </motion.div>
  )}
</AnimatePresence>
```

## 🛠️ Pro Tips
1. **Performance Optimization**
```jsx
<motion.div layout> {/* Auto-animate layout changes */}
  <Component />
</motion.div>
```

2. **SVG Animations**
```jsx
<motion.svg
  initial={{ rotate: -180 }}
  animate={{ rotate: 0 }}
>
  <motion.path
    d="M20,20 L80,80"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
  />
</motion.svg>
```

3. **Cycle Animations**
```jsx
const [animate, cycle] = useCycle("start", "end");

return (
  <motion.div
    variants={{
      start: { x: 0 },
      end: { x: 100 }
    }}
    animate={animate}
    onClick={() => cycle()}
  />
);
```

## 🚀 Advanced Patterns
### Route Transitions
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

### Scroll-linked Animations
```jsx
const { scrollYProgress } = useScroll();

<motion.div
  style={{ scaleX: scrollYProgress }}
/>
```

## 📚 Recommended Practices
- Use variants for complex animation sequences
- Prefer `AnimatePresence` for mount/unmount animations
- Combine with CSS transitions for complex effects
- Use `layout` prop for automatic layout animations
- Test animations with `reduceMotion: true`

## ⚠️ Common Pitfalls
1. Forgetting `AnimatePresence` for exit animations
2. Not cleaning up event listeners in `useCycle`
3. Overusing complex spring animations
4. Not considering mobile performance
5. Ignoring reduced motion preferences

## 📈 Animation Cheat Sheet
| Property          | Values                      |
|--------------------|----------------------------|
| opacity           | 0-1                        |
| scale             | 0.5-2                      |
| rotate            | 0-360 (degrees)           |
| x/y               | Any pixel value           |
| borderRadius      | px/%                       |
| boxShadow         | string values              |
| pathLength        | 0-1 (SVG only)             |
| filter properties | blur, brightness, etc.    |

Last Updated: July 2025 | Framer Motion v10+