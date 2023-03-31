const fulltext = import.meta.glob('/content/**/*.md', { eager: true });

export const getPage = (slug) => {
    const correctSlug = slug.replace(/\/+$/, '');;
    const fullPath = `/content/${correctSlug}.md`;
    const indexPath =  slug == '' ? `/content/index.md` : `/content/${correctSlug}/index.md`;

    const post: any = fulltext[fullPath] ? fulltext[fullPath] : fulltext[indexPath] ? fulltext[indexPath] : null;

    if (post != null) {
        const metadata = post.attributes;
        const document = post.html;

        return {
            isIndex: slug == '',
            metadata: metadata,
            document: document,
        }
    }
    return null;
}