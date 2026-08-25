#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

if ! command -v node >/dev/null 2>&1; then
  echo "HATA: Node.js bulunamadı. Node.js 22.13 veya daha yeni bir sürüm kurun."
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "HATA: npm bulunamadı."
  exit 1
fi

node_major="$(node -p 'process.versions.node.split(".")[0]')"
node_minor="$(node -p 'process.versions.node.split(".")[1]')"

if (( node_major < 22 || (node_major == 22 && node_minor < 13) )); then
  echo "HATA: Node.js 22.13 veya daha yeni bir sürüm gerekiyor. Mevcut sürüm: $(node -v)"
  exit 1
fi

echo "1/2 - Gerekli paketler kuruluyor..."
npm ci

echo "2/2 - Güncel tema üretim için hazırlanıyor..."
npm run build

echo "Kurulum ve derleme tamamlandı. Şimdi sunucunuzdaki mevcut site işlemini yeniden başlatın."
