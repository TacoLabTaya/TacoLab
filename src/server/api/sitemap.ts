import type { IncomingMessage, ServerResponse } from 'http'

const urls = [
    { loc: 'http://tacolab.tech'        ,lastmod: '2022-07-15', changefreq: 'monthly', priority: '1' },
    { loc: 'http://tacolab.tech/profile',lastmod: '2022-07-15', changefreq: 'monthly', priority: '1' },
    { loc: 'http://tacolab.tech/works'  ,lastmod: '2022-07-15', changefreq: 'monthly', priority: '1' },
];

export default (req: IncomingMessage, res: ServerResponse) => {
    const typetag = '<?xml version="1.0" encoding="UTF-8"?>'
    const urlset_open = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    const urlset_close = '</urlset>'
    var ret = '';

    ret += typetag;
    ret += urlset_open;

    urls.forEach( (u) => {
        var r = '';
        r += '<url>';
        r += `<loc>${u.loc}</loc>`;
        r += `<lastmod>${u.lastmod}</lastmod>`;
        r += `<changefreq>${u.changefreq}</changefreq>`;
        r += `<priority>${u.priority}</priority>`;
        r += '</url>';

        ret += r;
    } );

    ret += urlset_close;

    return ret;
}