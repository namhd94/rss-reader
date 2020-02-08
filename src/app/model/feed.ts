export interface Feed {
    status: string;
    feed: FeedInfo;
    items: FeedEntry[];
}

interface FeedInfo {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
}

interface FeedEntry {
    title: string;
    pubDate: string;
    link: string;
    guid: string;
    author: string;
    thumbnail: string;
    description: string;
    content: string;
}
