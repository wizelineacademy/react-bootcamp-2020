const createUrlParams = (url, params) => {
    const _encodeURIComponent = encodeURIComponent;
    const query = Object.keys(params)
        .map(
            (current_param) =>
                _encodeURIComponent(current_param) +
                '=' +
                _encodeURIComponent(params[current_param])
        )
        .join('&');
    return `${url}?${query}`;
};

export default createUrlParams;
