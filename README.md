## 👥 Team Members & Responsibilities

| Member               | Role                           | Section Responsible                      |
| -------------------- | ------------------------------ | ---------------------------------------- |
| Shams all Labib      | Project Lead                   | All Section checker and updated the code |
| Gantabya Kumar Bayda | Hero Section Designer          | Navbar + Consistency + All Menu          |
| Maqsuda Mahboob      | About Section Designer         | About Section                            |
| Aminur Rahman        | Footer Section Designer        | Footer Section                           |
| Shafin Ahmed         | User Dashboard Designer        | User Dashboard                           |
| Aftab                | Food seller Dashboard Designer | Food Seller Dashboard                    |
| Taslima Akter        | Landing page Section Designer  | More Landing page add                    |

## Test Credentials

| User Role   | Email                      | Password          |
| ----------- | -------------------------- | ----------------- |
| Admin       | cristianoronaldo@gmail.com | CR7fgthg@P0rtu    |
| Food Seller | lionelmessi@gmail.com      | Messi10fgthg@Arg2 |
| Customer    | aliabhatt@gmail.com        | Al1@Bh@t16Box0f   |

## 🛠️ Tech Stack

- **Frontend Framework**: React (Vite)
- **Styling**: Tailwind CSS + DaisyUI
- **Deployment**: GitHub Pages / Vercel / Netlify (ready)

## 🚀 Quick Start (Development Workflow)

**সবাই প্রথমে development ব্রাঞ্চ থেকে শুরু করবেন!**

```bash
# 1. রিপোজিটরি ক্লোন করো (প্রথমবার)
git clone https://github.com/YOUR_USERNAME/tasty-haat.git

# 2. প্রজেক্ট ফোল্ডারে যাও
cd tasty-haat

# 3. dependencies ইনস্টল করো
npm install

# 4. development ব্রাঞ্চে সুইচ করো (প্রধান ব্রাঞ্চ থেকে শুরু)
git checkout development    # যদি না থাকে তাহলে: git checkout -b development

# 5. নিজের ফিচার/সেকশনের জন্য নতুন ব্রাঞ্চ তৈরি করো
git checkout -b your-name-section    # উদাহরণ: git checkout -b gantabya-navbar
প্রত্যেকবার কাজ শুরু করার আগে:
git pull origin development     # সবার লেটেস্ট চেঞ্জ নিয়ে নাও
কাজ শেষ করে পুশ করার সময়:
git add .
git commit -m "feat: added navbar with responsive design"
git push -u origin your-branch-name
তারপর GitHub-এ Pull Request খুলো → base: development ← compare: তোমার ব্রাঞ্চ
🎨 Design Guidelines (সবাই মানবে)

Mobile-first approach
Use DaisyUI classes (btn-primary, card, hero ইত্যাদি)
Theme colors: --primary: #e74c3c, --secondary: #f39c12
Clean & modern UI (no unnecessary animations)
```
