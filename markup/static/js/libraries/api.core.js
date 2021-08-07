import axios from 'axios'


class API {

	// for dev 
	baseUrl = 'http://127.0.0.1:8000'
	csrf = 's0EgUttZwBSvAQl7t5d5S3QmCc4KSTIGvTj1XXQk'

	// for production
	// baseUrl = window.location.origin
	// csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
	
	// api name start 
	getCustomDataName = async url => {
		const res = await axios({
			url: `${this.baseUrl}${url}`,
			method: 'get',
			type: 'json',
			headers: {
				'X-CSRF-TOKEN': this.csrf,
			}
		})

		return res
	}

	// api name start end 


}

export default API;