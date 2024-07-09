/**
 * Represents a search result.
 */
export type SearchResult = {
    /**
     * The unique identifier of the search result.
     */
    id: string;
    
    /**
     * The title of the search result.
     */
    title: string;
    
    /**
     * The URL of the search result.
     */
    url: string;
    
    /**
     * The description of the search result.
     */
    description: string;
    
    /**
     * The category of the search result.
     * Possible values: 'VIDEOS', 'PLAYLISTS', 'BLOG_POSTS'.
     */
    category: 'VIDEOS' | 'PLAYLISTS' | 'BLOG_POSTS';
};
