# 🗓️ Day 2 – Event Handling + Forms

### 🎯 Goal: User input handle karna

---

# 🔥 Step 1 — onClick (Buttons ka Dimaag)

**onClick** = Jab button dabaya jaye tab koi kaam karo.

Example Socho:

* Light ON/OFF
* Like button
* Counter increment
* Modal open

Syntax ka hint:

```jsx
<button onClick={function}>
```

Function andar likha hota hai.

---

# 🔥 Step 2 — onChange (Input Ka Dimaag)

**onChange** = user jab kuch type karta hai, tab React ko batata hai.

Example Socho:

* Search bar
* Login input
* Form field
* Comment box

Syntax ka hint:

```jsx
<input onChange={(e) => ???} />
```

Question:
👉 `e.target.value` kya return karta hai? (Socho)

---

# 🔥 Step 3 — Controlled Component (MOST IMPORTANT)

Desi Explanation:

> Input ka value React ke control me ho.

Matlab:
React → input ko control kare
Not Input → React ko control kare

Hint:

```
value = state
onChange = state change
```

Socho:

1. Ek state banao
2. Input ka value us state se bind karo
3. onChange me state update karo

Bus ho gaya controlled component 🤯

---

# 🔥 Step 4 — Conditional Rendering (Show/Hide Logic)

Condition laga ke UI dikhana/chupana.

Example:

* Agar input khaali → error message
* Agar logged in → welcome message
* Agar count > 5 → red color
* Agar loading true → spinner

Hint:

```jsx
{condition && <p>Show this</p>}
```

OR

```jsx
condition ? <A /> : <B />
```

---

# 🧠 Aaj kya banana hai? (Practice Exercise)

## 🔵 Exercise 1 — Simple Input Display

User jo type kare, wo niche show karo.

**Expect output:**

Input: "Rahul" → buttom show: "Hello Rahul"

Hint:

* useState
* onChange
* e.target.value

---

## 🔵 Exercise 2 — Empty Input Error

If user clicks Submit button but input empty → error show karo.

Hint:

* Conditional rendering

Example logic:

```
if (text === "") {
  show error
} else {
  show success
}
```

---

## 🔵 Exercise 3 — Password Show/Hide

Button dabane par password visibility toggle.

Hint:

```
type = show ? "text" : "password"
```

---

# 🧠 Developer Mindset Tips

Har input pe ye socho:

* Data kaha ja raha hai? → state
* Kab update ho raha hai? → onChange
* UI me kya effect ho raha hai? → conditional rendering
* Kya state correct variable me ja rahi hai? → controlled component

---

# 🎥 Recommended Resources (Latest & Updated)

📌 **React Official Docs (2026 Ready)**
[https://react.dev/learn](https://react.dev/learn)

Read these topics:

* Responding to Events
* State: A Component’s Memory
* Conditional Rendering
* Updating UI Based on Input

📌 **Hitesh Choudhary (Hindi) – React Playlist**
Search: *Hitesh Choudhary React 18*

📌 **Codevolution (Deep Explanation)**
Search: *React Form tutorial Codevolution*

---

