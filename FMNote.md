# قسمت 3 فریمر موشن

### برای دسترسی داشتن به فیچر های فریمر موشن باید اول لینکش کنیم

```bash
npm i framer-motion
```

### برای شروع استفاده از این کتابخانه فقط کافیه اینپورتش کنید

```jsx
import { motion } from "framer-motion";
```

### و سپس نیاز هست که پشت تگ ها موشن رو تعریف کنیم به شکل مثال های زیر

```jsx
<motion.div>this is a motion div</motion.div>
<motion.button>this is a motion button</motion.button>
<motion.h3>this is a motion h3</motion.h3>
```

### برای اینکه یک انیمیشن مثلا ساده ای به ما بده ما باید پراپ انیمیت رو بهش پاس بدیم

```jsx
<motion.div animate={{ fontSize: "3rem", color: "#f767fd" }}>
  put inline style in prop animate this div
</motion.div>
```

### rotateZ: چرخش عمودی

### scale: اسکیل یک و نیم میگه اندازه یک و نیم برابر حالت عادی بشه

```jsx
<motion.div animate={{ rotateZ: 180, scale: 1.5 }}>
  put inline style in prop animate this div
</motion.div>
```

### برای دادن مقدار منفی یا مقدار بجز عدد پیکسل مثبت باید داخل کوتیشن باشه

###### پایان قسمت سوم

---

# قسمت چهارم فریمر موشن

### پراپ انیمیت که ما راسال میکنیم برای نقطه پایانی هست

```jsx
<motion.div inital={{ y: "-250px" }} animate={{ y: 10 }}>
  inital for start and animate for end animation
</motion.div>
```

### یک پراپ دیگه ای ما داریم به اسم اینشیال برای نقطه شروع است

### y همان فاصله عمودی

### تکه خط کد بالا این عملکرد رو دارد که از 250 پیکسل از بالا شروع میشه تا 10 پیکسل میاد پایین

---

# قسمت 5

### برای اینکه سرعت انیمیشن رو کنترل کنیم از پراپ انیمیشن استفاده میکنیم

```jsx
<motion.div
  inital={{ y: "-250px" }}
  animate={{ y: 10 }}
  transition={{ delay: 0.3, type: "" }}
>
  transition is for controlled speed animation
</motion.div>
```

## مقادیر تنزیشن

### delay: زمان انتظار برای شروع انیمیشن

### duration: زمان انحام شدن ایشیال پراپ تا انیمیشن

### type: همان نوع است که پنج تا ولیو میگیره

1.  inertia:
2.  just:
3.  keyframes:
4.  spring: و یک حالت فنری تور نرمالی داره
5.  tween: هیچ حالت فنری وجود نداره

### برای مواردی که اوپسیتی هستن انیشیال و انیمیت تایپ ترنزیشن توین هست چون نیازی به فنری شدن نداره

### برای انیمیشن هایی که انیشیالشون و انیمیتشون جابه جایی هست تایپ ترنزیشن اسپرینگ هست

### وقتی ما تایپ رو اسپرینگ میدیم میتونیم از قابلیت های مخصوص به اسپرینگ استفاده کنم

### stiffness: مقدار سختی (حالت فنری زیادی داره)

###### transition : یعنی انتقال

---

# قسمت 6

### whileHover: برای هاور المنت ها استفاده میشه (وقتی هاور شد فلان کار هارو انجام بده)

### originX: اگه مقدار اینو صفر بزاریم میبینیم که سمت چپش ثابته و سمت راست تغییر پیدا میکنه

---

# قسمت 7

### ما میتونیم از ورینت هم استفاده کنیم توی فریمر موشن

### میتونیم یک ابجکت استفاده کنیم در چند جا استفاده کنیم که کدمان تمیز تر بشه

### یک ابجکت بالای ریترین تعریف میکنیم توش مقدار ایشیال و انیمیت رو به اسم دلخاه مینویسیم مثلا فرام و تو

##### اسم ابجکت ورینت طبق قانون بین برنامه نویس ها باید اسم کلاس + کلمه ورینت باشه

### و سپس در المنت دیو به عنوان مثال مینویسیم ورینت برار با کانتینر ورینت

### در نهایت در پراپ اینیشیال هم اسم فرام رو مینیسیم که بشناسش

### و سپس در پراپ انیمیت هم اسم تو رو مینیسیم که بشناسش

```jsx
  const containerVarinats = {
    from: {
      x: "100vw"
    },
    to: {
      x: 0,
    };
  }

  // in return

    <motion.div
      className="toppings container"
      variants={containerVarinats}
      initial="from"
      animate="to"
    > Varinats for clean code
    </motion.div>
```

### و قابلیت که خیلی خوبی که دارع این ورینت برای فرزند ها میشه بدون نوشتن پراپ اینیشیال و انیمیت میتوانیم از این دو مقدار استفاده بکنیم

## نکته مهم : ولیو اینیشیال و انیمیت باید حتما هم نام اینیشیال و انیمیت پرنت باشن تا درست عمل کنه

```jsx
  const containerVarinats = {
    from: {
      opacity: 0,
      x: "100vw",
    },
    to: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 0.1,
      },
    },
  };

  const nextVariant = {
    from: {
      boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
      borderWidth: 1.9,
    },
    to: {
      borderWidth: 2,
    },
  };

  // in return

        <Link to="/">
          <motion.button
            variants={nextVariant}
            whileHover={{
              opacity: 0.9,
              scale: 1.1,
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
              borderWidth: 2,
            }}
          >
            Back
          </motion.button>
        </Link>
        <Link to="/order">
          <motion.button
            variants={nextVariant}
            whileHover={{
              opacity: 0.9,
              scale: 1.1,
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
              borderWidth: 2,
            }}
          >
            Next
          </motion.button>



    </motion.div>
```

### همونطور که مشخصه در تکه خط کد بالا ما اصلا در المنت فرزند از اینیشیال و انیمیت استفاده نکردیم چون همنام انیشیال و انیمیت پرنتشون هستن فقط ورینت رو پاس دادیم

---

# قسمت 8

### when: "beforeChildren" = اگه وربنت رو هم به پرنت بدیم هم به المنت فرزند فریمز موشن نمیدونه که اول کدومو اجرا کنه اگه ون بیفور چیلدرن رو به پزنت بدیم اول انیمیشن پزنت رو اجرا میکنه بعد فرزند

```jsx
const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};
```

### mass: .4 = تقریبا میشه گفت همان جرم است هر چقدر مقدار بالایی داسته باشه کندتر عمل میکنه

### damping: 0م = میشه همون میرایی اون نوسان کردنش یک حد ریزی طول میکشه و بعد متوقف میشه

### staggerChildren: 0.5 = استرگیر چیلدرن میاد میگه که پرنت هاش به ترتیب با این سرعت اجرا بشن اولین فرزندن نیم ثانیه سرعتش باشه فرزند بعدی

```jsx

const containerVariants = {
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
    }
}

const childVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

// in return

<motion.div
  className="container order"
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  <motion.div variants={childVariants}></motion.div>
</motion.div>
```

### اگه در پرنت المنت از ورینتی استفاده کنیم که اینیشال و انیمیتی رو تنظیم کرده باشیم دیگه نیازی نیست در چایلد انیشیال و انیمیت رو تنظیم کنیم

---

# قسمت 9

### اگه مقدار اسکیل رو به صورت ارایه بدیم بجای عدد اون به اندازه تمامی مقادیر بزرگ و کوچیک میشه

```jsx
const buttonVariants = {
  hover: { scale: [1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1] },
};
```

---

# قسمت 10

### برای انیمیشن به صورت حلقه باید چیکار بکنیم ؟

### ما باید بیایم توی مقدار ترنزیشن اول ریپیت تایپ در نظر بگیریم که سه تا مقدار میگیره

1. mirror : سرعت نرمال

```jsx
const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      repeatType: "mirror",
      repeat: Infinity,
    },
  },
};
```

2. revarse : اجرای برعکس

```jsx
const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      repeatType: "reverse",
      repeat: Infinity,
    },
  },
};
```

3. loop : سرعت تند

```jsx
const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      repeatType: "loop",
      repeat: Infinity,
    },
  },
};
```

### و یک مقدار دیگه هم میگیره به اسم ریپیت که تعداد تکرار رو میتونیم تایین کنبم ده بار تکرار بشه صد تا بی نهایت

### yoyo: infinity = دقیقا عملکردش مثل ریپیت تایپ میرر و ریپیت اینفینیتی

```jsx
const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      yoyo: infinity,
    },
  },
};
```

---

# قسمت 11

### برای اینکه یک المنت رو مثلا با تیم اوت از صفحه خارج بکنیم باید به شکل زیر عمل بکنیم

```jsx
<AnimatePresence>
  {isShowDiv && (
    <motion.div exit={{ y: "-100vh" }}>
      if is show falsed value this div move to 100 view port height left
    </motion.div>
  )}
</AnimatePresence>
```

### AnimatePresence : باید پرنت قرار بدیم چون بفهمه توش میخاد انیمیشن خروج انجام بشه

---

# قسمت 12

```jsx
// in top level
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
// in funtion
  const location = useLocation()
// in return
<>
  <Header />
  <AnimatePresence mode="wait">
    <Routes location={location} key={location.key}>
      <Route path="/base" element={<Base addBase={addBase} pizza={pizza} />} />
      <Route
        path="/toppings"
        element={<Toppings addTopping={addTopping} pizza={pizza} />}
      />
      <Route path="/order" element={<Order pizza={pizza} />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </AnimatePresence>
</>
```

### const location = useLocation() [ برای استفاده از یو ار ال در حال حاظر ]

### key={location.key} / location={location} [ هر بار که تغییر اتفاق می افتد انیمیشن پریسینس متوجه تغییر بشه و اون انیمیشن رو اجرا کنه ]

### mode="wait" [ این خیلی مهمه و برای اینکه کاملا وقتی روت تغییر کرد روت بعدی بیاد و مشکلی توی تغییر روت پیش نیاد به باگ نخوره ]

---

# قسمت 13 null

---

# قسمت 14

### onExitComplete={callback function} |= وقتی از روت خارج بشه و عوض بشه روت این کالبک فانکشن انجام بشه

```jsx
<AnimatePresence mode="wait" onExitComplete={() => setShowModal(false)}>
  <Routes location={location} key={location.key}>
    {/* Route */}
    {/* Route */}
    {/* Route */}
    {/* Route */}
  </Routes>
</AnimatePresence>
```

---

# قسمت 15

### rotate: چرخش هست همان ترنسفورم روتیت

```jsx
const svgVariants = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
  },
};
```

### pathLength : هر اس وی جی یک نقظه شروع داره طبق عدادی که داخل اتربیوت دی نوشته شده پس لنس صفر یعنی داخل اتربیوت دی هیچی نوشته نشده یک مقدار یک یعنی تمام مقادیر داخل اتربیوت که قبلا بود هست و اینو با ترنزیشن میتونی خیلی زیبا در حالتی که انگار یک خودکار گذاشته یک نفر و داره اون شکل رو میکشه درست کنیم

### pathLength : 0

```html
<svg><path d=""></svg>
```

### pathLength : 1

```html
<svg><path d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"></svg>
```

```jsx

const svgVariants = {
    hidden: {
        rotate: -180
    },
    visible: {
        rotate: 0,
        transition: { duration: 1 }
    }
}

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            ease: "easeInOut"
        }
    }
}
// in return
<motion.svg
  className="pizza-svg"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  variants={svgVariants}
  initial="hidden"
  animate="visible"
>
  <motion.path
    fill="none"
    d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
    variants={pathVariants}
  />
  <motion.path
    fill="none"
    d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
    variants={pathVariants}
  />
</motion.svg>
```

---

# قسمت 16

```jsx
const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                duration: 0.5,
                repeatType: "mirror",
                repeat: Infinity
            },
            y: {
                duration: 0.25,
                repeatType: "mirror",
                repeat: Infinity,
                ease: 'easeOut'
            }
        }
    }
}
// in return
        <motion.div className="loader"
            variants={loaderVariants}
            animate="animationOne"
        >

        </motion.div>
```

---

# قسمت 17

### برای تغییر انیمیشن مثلا انیمیشن یک به انیمیشن دو از هوک یوز سایکل استفاده میشه

```jsx
import { motion, useCycle } from "framer-motion";
```

### اول اینپورت میشه

```jsx
const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
```

### اول مقدار که ازش میخایم استفاده کنیم قرار میدیم دقیقا مثل استیت و سپس متدد برای تغییرش رو پاس میدیم بهش و توی یوز سایکل و داخل یوز سایکل انیمیشن هارو قرار میدیم مقادیر دیفالتشم همون اسم کی ابجکت ورینت رو قرار میدیم

```jsx
<motion.div className="loader" variants={loaderVariants} animate={animation}>
  this div is animate is animation
</motion.div>
```

### داخل انیمیت همون انیمیشن که توی یوز سایکل ساختیم قرار میدیم

```jsx
<div onClick={() => cycleAnimation()}>Cycle Loader</div>
```

### برای تغییر مقدار یک انیمیشن باید ای متدد رو فراخانی بکنیم

```jsx
setTimeout(() => {
  cycleAnimation();
}, 3000);
```

### برای تغییر انیمیشن به صورت خودکار بعد سه ثانیه

```jsx
import { motion, useCycle } from "framer-motion";

const transitionY = {
  duration: 0.25,
  repeatType: "mirror",
  repeat: Infinity,
  ease: "easeOut",
};

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        duration: 0.5,
        repeatType: "mirror",
        repeat: Infinity,
      },
      y: transitionY,
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: transitionY,
    },
  },
};

export default function Loader() {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");

  setTimeout(() => {
    cycleAnimation();
  }, 3000);

  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      ></motion.div>

      <div onClick={() => cycleAnimation()}>Cycle Loader</div>
    </>
  );
}
```

---

# قسمت 18

```jsx
 <motion.div className="logo"
    drag
    dragConstraints={{left:0, top:0, right:0, bottom:0}}
    dragElastic={0.6}
 >
```
### drag = قابلیت درگ کردن پیدا میکنه المنت
### dragConstraints = یک محدودیت برای درگ کردن تعیین کنیم اگه تمام جهات رو صفر در نظر بگیریم وقتی از حالت درگ در امد برگرده سرجای اولش
### dragElastic = قابلیت کشسانی که چقدر همراه موس المنت بیاد