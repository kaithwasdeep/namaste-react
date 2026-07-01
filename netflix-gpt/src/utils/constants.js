export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const DEFAULT_USER_AVATAR = "https://lh3.googleusercontent.com/rd-ogw/AF2bZyj1fNRJtiv9BEllMsZeDRhqZBdudiFPAcnpAcI76YwbK6Kg-UahV-lQ8yba2OIlXuY5V6hN3C7oZDgYQH_dojuFAbUdavpkCMhdCF9oXRAIkcz6BLvIyRLjmNCtCYgQU5ifXdM9vj3FhESpzOafmNdAaRgoclgCSh_ybdrFucD0dn87MQoe_AsJVib9QiSTNK_5S1lCS_SW7RSJDAdASNBOOCQfFObXQTAPaBWdyxOx3EUCfjdZxavSqEjijw5YFys-QuKF4zbIiDlJ5JVr9YCSpXPrvmb4s_cBQNWFy1LHJmDUcrKdrkKVQAw9edULjjpWI43-X5rwbBHcqvG1O0Y-advaGDfNVNWSFtEUOJrWSxNDevVnUfEuaZyDBt7zEEXydMMPujRZWAEntnzLVRtB8Z8cVMg11aTJjtFHuz6MVwxBwCjiFNBCPVuJ2cfrmbYBnxKN5nPLcxIh0s1V-1IDsxfjSfv70ifbazVT16hXpN4H70eeJjcco5gzObH1FsPRZQsCv5ZlrVpB5_npsEP-qre0M85AppVm2UKXigrBj0i6sEIQx70AYqJPX4EF3ZRQ-3qbB0j_uhP3PfY9g0G1t7LpcYMUjZh3yq9_6JJJyk-pGKmYRIr4E5laLkc5sfBevm926TjpW0vXjfKwWMWUE4IAkR4r6JKE5TG02VtZNX3e53lQDiVx02vYzGWTB99r1UJBTp21fD2Va0CCJjn5VepTLxULXGVX6Am68116dfA0aLC_UxCNK6JbkJvTHTylR5qCvacOemvNkhz3IftN7uIE4ldTVvwKKbccn2wo57KMKzs_HlNJMOgObuXQPz_ZzpdpsstQHEa4QQ-hnCzUfOHmFSsmw3dXoibhy0-AxM28r1NERf3jkWTb3qUNcmZeROcSVPD8oaYj6sJ0EN0DuDgYllpCBvgx9xDA3fePGDnyaDyZE1SCKh9E0M4_zj63OGpPCFtSeupxkZu9Z_2mjv4266Xulln_STaH53Hw1kJTBo6DuV_pMemvs8a8wToJDvXcHWcuBVb5tG3QgcnyrPtj6Ijymk6t2-8181d9h8m4RIDM4_hbYVXBlZFCV_tDQkKItDPCR2xgVI4yqHQ1FJX8HbaT--_dtnkbWef_AV9Atz8nWb2ZiJFJywZmnyluAIOnRmXouJI-tBbkoP1a58VzqTEzyEV00iWjYqOcFfE8VTiUi82UhabkqXCm_VcrZOexmsh8GOOM4Ext08kl4Z-A=s64-c";

export const LOGIN_BACKGROUND_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/81b52f88-dc76-488d-a939-0cf13a260a6e/web/IN-en-20260622-TRIFECTA-perspective_d39d60ef-cb5a-4793-9546-0a8d9a87948e_large.jpg";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY
  }
};

export const NOW_PLAYING_API_URL = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
export const POPULAR_API_URL = 'https://api.themoviedb.org/3/movie/popular?page=1';
export const TOP_RATED_API_URL = 'https://api.themoviedb.org/3/movie/top_rated?page=1';
export const UPCOMING_API_URL = 'https://api.themoviedb.org/3/movie/upcoming?page=1';

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
    {identifier: "en", name: "English"},
    {identifier: "hindi", name: "Hindi"},
    {identifier: "spanish", name: "Spanish"},
]

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;