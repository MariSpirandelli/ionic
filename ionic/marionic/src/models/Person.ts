import { Profile } from "./Profile";
import { Application } from "./Application";

export class Person{
    
    public id: number;	
    public cpf: string;
    public name: string;
	public rg: string;
	public birthday: Date;
	public profile: Profile;
	public applications: Application[];

	constructor(){
		this.profile = new Profile();
		this.applications = [];
	}
}