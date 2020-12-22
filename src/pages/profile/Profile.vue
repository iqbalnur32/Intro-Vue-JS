<template>
	<AppLayout>
        <template v-slot:header>
            <div class="jumbotron">
                <h2 class="text-center font-weight">Halaman Profile</h2>
            </div>
        </template>
        <div class="container">
        	<div class="row">
        		<div class="col-lg-12 col-md-12">
        			 <div class="card">
        			 	<div class="card-header">
        			 		<h2 class="text-center font-weight" style="font-family: Arial;">Profile Page</h2>
        			 	</div>
        			 	<div class="card-body">
                            <p v-if="errors.length">
                                <b>Please correct the following error(s):</b>
                                <ul>
                                  <li v-for="error in errors">{{ error }}</li>
                                </ul>
                            </p>
        			 		<form @submit.prevent="updateData">
        			 			<div class="form-group">
        			 				<label>No Telp</label>
        			 				<input class="form-control" id="no_telp" input v-model.number="no_telp" type="number" name="no_telp"> 
        			 			</div>
        			 			<div class="form-group">
        			 				<label>Alamat</label>
                                    <textarea class="form-control" name="alamat" id="alamat" v-model="alamat">
                                    </textarea>
        			 				<!-- <input class="form-control" type="Username" name="username" v-model="username">	 -->
        			 			</div>
        			 			<div class="">
        			 				<button type="submit" class="btn btn-block btn-xl btn-outline-success">Update</button>
        			 			</div>
        			 		</form>
        			 	</div>
        			 </div>
        		</div>
        	</div>
        </div>
    </AppLayout>
</template>

<script>
	import AppLayout from "../layouts/AppLayout"
	import Button from "../../components/ButtonComponent"
	import { authHeader } from '../../helpers';
	export default {
		name: "Profile",
		components: {
			AppLayout,
			Button
		},
		data(){
		  return {
		  	no_telp: '',
		  	alamat: '',
            errors: []
		  }
		},
        methods: {
	        updateData(e){
	        	let payload = {
	        		no_telp: parseFloat(this.no_telp),
	        		alamat: this.alamat
	        	}

                /*this.errors = [];
                if (this.$store.state.errMessage) {
                    this.errors.push(this.$store.state.errMessage)
                }
                console.log(this.errors);*/

	        	this.$store.dispatch('updateProfile', payload)
	            e.preventDefault();
            }
        },
        mounted(){
			this.$store.dispatch('getProfile')
            .then(({data}) => {
                console.log(data.data.data.alamat)
                this.no_telp = data.data.data.no_telp
                this.alamat = data.data.data.alamat
            })
            .catch((err) => {
                alert('error')
            })
		},
        /*computed: {
        	no_telp: {
                // console.log(this.$store.state.myProfile.no_telp);
                get(){
        		  return this.$store.state.myProfile.no_telp
                },
                set(no_telp) {
                    return no_telp
                }
        	},
        	alamat: {
                get(){
        		  return this.$store.state.myProfile.alamat
                },
                set(alamat) {
                    return alamat
                }
                // console.log(this.$store.state.myProfile.alamat);
        	}
        }*/
	}
</script>