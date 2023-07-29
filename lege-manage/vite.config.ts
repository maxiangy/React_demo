import { defineConfig } from 'vite'
import styleImport,{AntdResolve} from 'vite-plugin-style-import'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
      styleImport({
        resolves:[
          AntdResolve()
        ],

      }),
      [
        "import",
        {
          "libraryName": "antd",
          "style": true
        }
      ]

  ],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'./src')
    }
  }
})
