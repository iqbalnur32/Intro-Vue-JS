<template>
	<AppLayout>
        <template v-slot:header>
            <div class="jumbotron">
                <h2 class="text-center font-weight">Halaman Dashboard</h2>
                <h2 class="text-center font-weight">Your Are Login</h2>
            </div>
        </template>
        <div class="container">
	        <div class="card">
	        	<div class="card-header">
	        		<h2>Users All</h2>
	        	</div>
	        	<div class="card-body">
	        		<table class="table table-bordered">
	        			<thead>
		        			<tr>
		        				<th>No</th>
		        				<th>Nama</th>
		        				<th>Jenis Kelamin</th>
		        				<th>Status Aktif</th>
		        				<th>Status Relation</th>
		        			</tr>
	        			</thead>
	        			<tbody v-for="(item, index) in usersAll">
	        				<tr>
	        					<td>{{ index }}</td>
	        					<td>{{ item.nama_lengkap }}</td>
	        					<td>{{ item.jenis_kelamin }}</td>
	        					<td v-if="item.status_aktif === 'online'" style="color: green; font-weight: bold;">Online</td>
	        					<td v-else="item.status_aktif" style="color: red; font-weight: bold;">Offline</td>
	        					<td>{{ item.status_relation !== null ? item.status_relation : "Null"  }}</td>
	        				</tr>
	        			</tbody>
	        		</table>
	        	</div>
	        </div>
        </div>
    </AppLayout>
</template>

<script>
	import AppLayout from "../layouts/AppLayout"
	export default {
		name: "Home",
		components: {
			AppLayout
		},
		data(){
		  return {
		  	usersAll: []
		  }
		},
		mounted(){
			this.$store.dispatch('getAll')
			.then(({data}) => {
				this.usersAll = data.data
				console.log(this.usersAll);
			})
			.catch((err) => {
				console.log(err);
			})
		},
        metaInfo: {
            title: 'Dahsboard',
        },
	}
</script>

<style scoped>
	
</style>