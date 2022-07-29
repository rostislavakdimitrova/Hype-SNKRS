const request = async (method, url, data) => {
    try {

        const user = localStorage.getItem('auth');
        const auth = JSON.parse(user || {});
        
        let headers = {};

        if (auth.token) {
            headers['X-Authorization'] = auth.token;
        }

        let req;

        if (method === 'GET') {
            req = fetch(url, { headers });
        } else {
            req = fetch(url, {
                method,
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        }

        const response = await req;

        const result = await response.json();

        return result;
    } catch (err) {
        console.log(err);
    }
};

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const put = request.bind({}, 'PUT');
export const patch = request.bind({}, 'PATCH');
export const remove = request.bind({}, 'DELETE');