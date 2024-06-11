# 🏤 Restaurant
<details>
  <summary>Table of Contents</summary>
   🔶 <a href="#-about-the-project">About The Project</a><br>
   🔶 <a href="#landing-page">Landing Page</a><br>
   🔶 <a href="#about-us-page">About Us Page</a><br>
   🔶 <a href="#reservation-page">Reservation Page</a><br>
   🔶 <a href="#-built-with">Built With</a><br>
   🔶 <a href="#-getting-started">Getting Started</a><br>
</details><br>



## 🚀 About The Project
Restaurant Website that has the capability to let users make reservation.<br><br>

<h3>Landing Page</h3>
<img src="https://github.com/MhdIr7an/restaurant/assets/93046265/249f4134-9400-48a1-830b-1921ac221eba" width="800" height="400" /><br><br>

<h3>About Us Page</h3>
<img src="https://github.com/MhdIr7an/restaurant/assets/93046265/528724f6-761e-4d76-92a7-3eba9616fe20" width="800" height="400" /><br><br>

<h3>Reservation Page</h3>
<img src="https://github.com/MhdIr7an/restaurant/assets/93046265/d7f3f4dd-9f8b-422b-938e-0941f6cbd3dd" width="800" height="400" /><br><br>



## 🧰 Built With
<a href="https://react.dev/"><img alt="React Icon" width="60" height="60" src="https://icon.icepanel.io/Technology/svg/React.svg"></a>&nbsp;&nbsp;&nbsp;
<a href="https://vitejs.dev/"><img alt="Vite Icon" width="60" height="60" src="https://icon.icepanel.io/Technology/svg/Vite.js.svg"></a>&nbsp;&nbsp;&nbsp;
<a href="https://sass-lang.com/"><img alt="Scss Icon" width="60" height="60" src="https://icon.icepanel.io/Technology/svg/Sass.svg"></a>&nbsp;&nbsp;&nbsp;
<a href="https://dotnet.microsoft.com/en-us/languages/csharp"><img alt="C# Icon" width="60" height="60" src="https://icon.icepanel.io/Technology/svg/C%23-%28CSharp%29.svg"></a>&nbsp;&nbsp;&nbsp;
<a href="https://dotnet.microsoft.com/en-us/"><img alt="Dotnet Icon" width="60" height="60" src="https://icon.icepanel.io/Technology/svg/.NET-core.svg"></a>&nbsp;&nbsp;&nbsp;
<a href="https://www.typescriptlang.org/"><img alt="TypeScript Icon" width="60" height="60" src="https://icon.icepanel.io/Technology/svg/TypeScript.svg"></a>&nbsp;&nbsp;&nbsp;
<a href="https://bun.sh/"><img alt="Bun Icon" width="60" height="60" src="https://icon.icepanel.io/Technology/svg/Bun.svg"></a>&nbsp;&nbsp;&nbsp;
<a href="https://workers.cloudflare.com/"><img alt="Cloudflare Icon" width="60" height="60" src="https://icon.icepanel.io/Technology/svg/Cloudflare.svg"></a>&nbsp;&nbsp;&nbsp;
<a href="https://supabase.com/"><img alt="Supabase Icon" width="60" height="60" src="https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png"></a>&nbsp;&nbsp;&nbsp;

## 🚪 Getting Started

To get a local copy up and running follow these simple steps:
   
1. Clone the repo
   ```sh
   git clone https://github.com/MhdIr7an/restaurant.git
   ```

2. Navigate to client folder
   ```sh
   cd client
   ```
3. Install dependencies
   ```sh
   bun install
   ```
4. Run development server
   ```sh
   bun run dev
   ```
5. Rename .env.example to .env and specify backend api url
6. Go back to root folder then navigate to backend folder
   ```sh
   cd..
   cd backend
   ```
7. Install requirements
   ```sh
   dotnet restore
   ```
8. Run Build Command
    ```sh
    dotnet build
   ```
9. Create file named appsettings.json and give database connection string
    ```
    {
        "ConnectionStrings": {
            "DefaultConnection": ""
        },
        "Logging": {
            "LogLevel": {
            "Default": "Information",
            "Microsoft.AspNetCore": "Warning"
            }
        },
        "AllowedHosts": "*"
    }

   ```
10. Create file named appsettings.Development.json
    ```
    {
        "Logging": {
            "LogLevel": {
            "Default": "Information",
            "Microsoft.AspNetCore": "Warning"
            }
        }
    }

     ```
11. Apply Migrations
    ```
    dotnet ef database update

     ```
12. Run
    ```
    dotnet run

     ```
   

<p align="right"><a href="#-restaurant"><img alt="(Back to top)" width="50" height="50" src="https://cdn-icons-png.flaticon.com/128/15047/15047580.png"></a><p>