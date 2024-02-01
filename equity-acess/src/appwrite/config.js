import conf from '../conf/conf.js';
import { Client, ID , Databases,Storage} from "appwrite";

export class Service{
    client = new Client()
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) // Your API Endpoint
        .setProject(conf.appwriteProjectId);    // Your project ID
        this.databases=new Databases(this.client)
        this.bucket=new Storage(this.client)
    }


    // file upload
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
                )
        } catch (error) {
            console.log('app write service :: uploadFile error ', error)
        }
    }

    
    async createRequest({post}){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId,'123456788765432112345678' ,{
                post:post
            });
        } catch (error) {
            console.log('app write service :: createPost error ', error)
        }
    }    
    
    async getRequest(){
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId)
        } catch (error) {
            console.log('app write service :: getPost error ', error)
        }
        return false
    }


    // async deleteFile(fileId){
    //     try {
    //         await this.bucket.deleteFile(conf.appwriteBucketId,fileId)
    //         return true
    //     } catch (error) {
    //         console.log('app write service :: getPosts error ', error)
    //     }
    //     return false
    // }

    getFilePreview(fileID){
        try {
            return this.bucket.getFilePreview(conf.appwriteBucketId,fileID)
        } catch (error) {
            
        }
    }
}
const service = new Service()
export default service
