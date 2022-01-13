import algoliasearch from "algoliasearch/lite";

const algolia_id = process.env.NEXT_PUBLIC_ALGOLIA_ID as string;
const algolia_searchkey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCHKEY as string;

export const algolia = algoliasearch(algolia_id, algolia_searchkey);
