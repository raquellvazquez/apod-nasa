export type PostImage = {
    copyright?: string;
    date?: string;
    explanation?: string;
    hdurl?: string;
    media_type?: string;
    service_version?: string;
    title?: string;
    url?: string;
    thumbnail_url?: string;
};

export type RouteStackParams = {
    Home: undefined;
    Detail: PostImage; 
}