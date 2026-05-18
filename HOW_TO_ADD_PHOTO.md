# 📸 কিভাবে আপনার ছবি যোগ করবেন

## 🎯 Hero Section এ ছবি যোগ করার নিয়ম

### ধাপ ১: ছবি প্রস্তুত করুন

1. **ছবির Requirements:**
   - Format: JPG, PNG, বা WebP
   - Size: 500x500 থেকে 1000x1000 pixels (Square/বর্গাকার ভালো)
   - File Size: 500KB এর কম (ভালো performance এর জন্য)
   - Background: Transparent বা সুন্দর background

2. **ছবি Edit করুন (Optional):**
   - Background remove করুন (remove.bg ব্যবহার করতে পারেন)
   - Crop করে square বানান
   - Brightness/Contrast adjust করুন

---

### ধাপ ২: ছবি Project এ যোগ করুন

#### পদ্ধতি ১: `public` ফোল্ডারে রাখুন

1. আপনার project folder এ যান: `C:\personal_work\portfolio`

2. `public` ফোল্ডার খুলুন (না থাকলে তৈরি করুন)

3. আপনার ছবি এই নামে রাখুন:
   ```
   public/profile.jpg
   ```
   অথবা
   ```
   public/profile.png
   ```

---

### ধাপ ৩: Code এ ছবি Enable করুন

**File খুলুন:** `components/sections/hero-section.tsx`

**Line 165-170 এ যান এবং comment সরান:**

#### Before (বর্তমানে):
```typescript
{/* Uncomment this when you add your image */}
{/* <Image
  src="/profile.jpg"
  alt="Nahid Hadan"
  fill
  className="object-cover rounded-full"
  priority
/> */}
```

#### After (পরিবর্তন করুন):
```typescript
{/* Your Profile Image */}
<Image
  src="/profile.jpg"
  alt="Nahid Hadan"
  fill
  className="object-cover rounded-full"
  priority
/>
```

**এবং Placeholder comment করুন (Line 173-186):**

#### Before:
```typescript
{/* Temporary Placeholder - Remove when you add your image */}
<div className="w-full h-full rounded-full glass flex items-center justify-center border-4 border-purple-500/30 overflow-hidden">
  ...
</div>
```

#### After:
```typescript
{/* Temporary Placeholder - Remove when you add your image */}
{/* <div className="w-full h-full rounded-full glass flex items-center justify-center border-4 border-purple-500/30 overflow-hidden">
  ...
</div> */}
```

---

### ধাপ ৪: Save এবং দেখুন

1. File **Save** করুন (Ctrl + S)
2. Browser **Refresh** করুন (F5)
3. আপনার ছবি দেখতে পাবেন! 🎉

---

## 🎨 ছবির Style Customize করুন

### Rounded (বর্তমান):
```typescript
className="object-cover rounded-full"
```

### Square with Rounded Corners:
```typescript
className="object-cover rounded-3xl"
```

### Square:
```typescript
className="object-cover rounded-lg"
```

### Different Fit:
```typescript
className="object-contain rounded-full"  // পুরো ছবি দেখাবে
className="object-cover rounded-full"    // Crop করে fit করবে
```

---

## 🖼️ বিভিন্ন Format এর জন্য

### JPG ছবির জন্য:
```typescript
<Image
  src="/profile.jpg"
  alt="Nahid Hadan"
  fill
  className="object-cover rounded-full"
  priority
/>
```

### PNG ছবির জন্য:
```typescript
<Image
  src="/profile.png"
  alt="Nahid Hadan"
  fill
  className="object-cover rounded-full"
  priority
/>
```

### WebP ছবির জন্য:
```typescript
<Image
  src="/profile.webp"
  alt="Nahid Hadan"
  fill
  className="object-cover rounded-full"
  priority
/>
```

---

## 🎯 Quick Steps (সংক্ষেপে)

```bash
# 1. ছবি রাখুন
public/profile.jpg

# 2. File খুলুন
components/sections/hero-section.tsx

# 3. Line 165-170 এ comment সরান
<Image src="/profile.jpg" ... />

# 4. Line 173-186 comment করুন
{/* <div className="placeholder">... */}

# 5. Save করুন (Ctrl + S)

# 6. Browser Refresh করুন (F5)
```

---

## 🐛 সমস্যা হলে?

### ছবি দেখা যাচ্ছে না?

1. **File name চেক করুন:**
   - `profile.jpg` (ছোট হাতের অক্ষর)
   - `public` ফোল্ডারে আছে কিনা

2. **Browser cache clear করুন:**
   - Ctrl + Shift + R (Hard Refresh)
   - অথবা Ctrl + F5

3. **Server restart করুন:**
   ```bash
   Ctrl + C
   npm run dev
   ```

### ছবি ঠিকমতো fit হচ্ছে না?

**`object-cover` থেকে `object-contain` এ পরিবর্তন করুন:**
```typescript
className="object-contain rounded-full"
```

### ছবি blur দেখাচ্ছে?

**উচ্চ resolution ছবি ব্যবহার করুন:**
- Minimum: 800x800 pixels
- Recommended: 1000x1000 pixels

---

## 💡 Pro Tips

1. **Background Remove:**
   - https://remove.bg ব্যবহার করুন
   - Transparent background ভালো দেখায়

2. **Image Optimization:**
   - https://tinypng.com এ compress করুন
   - File size কমিয়ে performance বাড়ান

3. **Professional Look:**
   - ভালো lighting এ ছবি তুলুন
   - Solid color background ব্যবহার করুন
   - Professional dress পরুন

4. **Multiple Formats:**
   - WebP format সবচেয়ে ভালো (ছোট size, ভালো quality)
   - PNG transparent background এর জন্য
   - JPG সাধারণ ছবির জন্য

---

## ✅ Checklist

- [ ] ছবি 500x500+ pixels
- [ ] File size 500KB এর কম
- [ ] `public/profile.jpg` এ রাখা হয়েছে
- [ ] Code এ comment সরানো হয়েছে
- [ ] Placeholder comment করা হয়েছে
- [ ] File save করা হয়েছে
- [ ] Browser refresh করা হয়েছে
- [ ] ছবি ঠিকমতো দেখা যাচ্ছে

---

**এখন আপনার ছবি যোগ করুন এবং portfolio টা আরো professional বানান! 📸✨**
