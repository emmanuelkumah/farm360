// vite.config.js
import { defineConfig } from "file:///mnt/c/Users/user/Desktop/Projects/farm360-admin/node_modules/vite/dist/node/index.js";
import react from "file:///mnt/c/Users/user/Desktop/Projects/farm360-admin/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tailwindcss from "file:///mnt/c/Users/user/Desktop/Projects/farm360-admin/node_modules/tailwindcss/lib/index.js";
var vite_config_default = defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  }
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://18.134.98.183:8080/",
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvdXNlci9EZXNrdG9wL1Byb2plY3RzL2Zhcm0zNjAtYWRtaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9tbnQvYy9Vc2Vycy91c2VyL0Rlc2t0b3AvUHJvamVjdHMvZmFybTM2MC1hZG1pbi92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vbW50L2MvVXNlcnMvdXNlci9EZXNrdG9wL1Byb2plY3RzL2Zhcm0zNjAtYWRtaW4vdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gXCJ0YWlsd2luZGNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIGNzczoge1xuICAgIHBvc3Rjc3M6IHtcbiAgICAgIHBsdWdpbnM6IFt0YWlsd2luZGNzcygpXSxcbiAgICB9LFxuICB9LFxuICAvLyBzZXJ2ZXI6IHtcbiAgLy8gICBwcm94eToge1xuICAvLyAgICAgXCIvYXBpXCI6IHtcbiAgLy8gICAgICAgdGFyZ2V0OiBcImh0dHA6Ly8xOC4xMzQuOTguMTgzOjgwODAvXCIsXG4gIC8vICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgLy8gICAgICAgc2VjdXJlOiBmYWxzZSxcbiAgLy8gICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sIFwiXCIpLFxuICAvLyAgICAgfSxcbiAgLy8gICB9LFxuICAvLyB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtVLFNBQVMsb0JBQW9CO0FBQy9WLE9BQU8sV0FBVztBQUNsQixPQUFPLGlCQUFpQjtBQUV4QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUyxDQUFDLFlBQVksQ0FBQztBQUFBLElBQ3pCO0FBQUEsRUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
