export interface Post {
    id: string;
    title: string;
    coverimg: URL;
    author: string;
    posted: Date;
    desc: string;
    content: string;

}

export interface Project {
    id: string;
    title: string;
    desc: {
        short: string;
        long: string;
    }
    date: Date;
    links: {
        npm: string;
        gh: string;
    }

}