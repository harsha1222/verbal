import axios from'axios'
const GET_CHECKIN_URL ='';

class CheckinService{
    getCheckin(pnrNo){
        return axios.get(GET_CHECKIN_URL + '/' + pnrNo)
    }

}
export default new CheckinService();