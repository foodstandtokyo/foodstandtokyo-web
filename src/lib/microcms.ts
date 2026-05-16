// microCMS接続設定
import { createClient } from 'microcms-js-sdk';
// 環境変数からサービスドメインとAPIキーを取得
const serviceDomain = import.meta.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.MICROCMS_API_KEY;
if (!serviceDomain || !apiKey) {
  throw new Error(
    'microCMSの環境変数が設定されていません。.envファイルまたはCloudflareの環境変数を確認してください。'
  );
}
export const client = createClient({
  serviceDomain,
  apiKey,
});
// 型定義 ----------
export type Brand = {
  id: string; // microCMS自動生成ID
  name: string;
  nameJp: string;
  subTitle: string;
  order: number;
  logo: {
    url: string;
    width: number;
    height: number;
  };
  heroImage?: {
    url: string;
    width: number;
    height: number;
  };
  circleImage?: {
    url: string;
    width: number;
    height: number;
  };
  about: string;
  slug: string;
  category: string;
  menuTitleItalic: string;
  menuTitleRest: string;
  heroBg: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
// サイト設定（オブジェクト形式・1つだけ）
export type SiteSettings = {
  kitchenTruckImage?: {
    url: string;
    width: number;
    height: number;
  };
  totalEvents?: string;
  prefectureCount?: number;
  brandCount?: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
export type MenuItem = {
  id: string;
  brand: Brand; // コンテンツ参照（ブランド情報がネストされる）
  name: string;
  priceLabel: string;
  priceValue: string;
  description: string;
  image?: {
    url: string;
    width: number;
    height: number;
  };
  order: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
// イベント（出店実績）
export type Event = {
  id: string;
  name: string;
  photo?: {
    url: string;
    width: number;
    height: number;
  };
  order: number;
  isFeatured?: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
// 取得関数 ----------
/** 全ブランドをorder順で取得 */
export async function getAllBrands(): Promise<Brand[]> {
  const response = await client.getList<Brand>({
    endpoint: 'brands',
    queries: {
      orders: 'order',
      limit: 100,
    },
  });
  return response.contents;
}
/** slugで1ブランドを取得 */
export async function getBrandBySlug(slug: string): Promise<Brand | null> {
  const response = await client.getList<Brand>({
    endpoint: 'brands',
    queries: {
      filters: `slug[equals]${slug}`,
      limit: 1,
    },
  });
  return response.contents[0] ?? null;
}
/** ブランドIDに紐づくメニューをorder順で取得 */
export async function getMenuItemsByBrandId(brandId: string): Promise<MenuItem[]> {
  const response = await client.getList<MenuItem>({
    endpoint: 'menu-items',
    queries: {
      filters: `brand[equals]${brandId}`,
      orders: 'order',
      limit: 100,
    },
  });
  return response.contents;
}
/** サイト設定を取得（オブジェクト形式） */
export async function getSiteSettings(): Promise<SiteSettings> {
  const response = await client.getObject<SiteSettings>({
    endpoint: 'site',
  });
  return response;
}
/** トップページ表示用イベント（isFeatured = true）をorder順で取得 */
export async function getFeaturedEvents(): Promise<Event[]> {
  const response = await client.getList<Event>({
    endpoint: 'events',
    queries: {
      filters: 'isFeatured[equals]true',
      orders: 'order',
      limit: 100,
    },
  });
  return response.contents;
}
/** 全イベントをorder順で取得（VIEW ALL EVENTSページ用） */
export async function getAllEvents(): Promise<Event[]> {
  const response = await client.getList<Event>({
    endpoint: 'events',
    queries: {
      orders: 'order',
      limit: 100,
    },
  });
  return response.contents;
}
