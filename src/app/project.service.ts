import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:3000/du_an';
  private apiUrlEmployee = 'http://localhost:3000/nhan_vien';
  async getProjects(): Promise<any> {
    try {
      const response = await fetch(this.apiUrl);
      return await response.json();
    } catch (error) {
      return console.error('Error fetching products:', error);
    }
  }
  async getProject(id:number): Promise<any> {
    try {
      const response = await fetch(this.apiUrl+'/'+id);
      return await response.json();
    } catch (error) {
      return console.error('Error fetching products:', error);
    }
  }

  async getMemberOfProject(id:number):Promise<any> {
    try {
      const res1 = await fetch(`${this.apiUrl}/${id}`);
      const res2 = await fetch(`${this.apiUrlEmployee}`);
      const data1 = await res1.json(); // string (members of project)
      const data2 = await res2.json(); // array (info members)
      
      let membersofproject = [];
      
      const memberIds = data1.members.split(',').map((idMember:any) => parseInt(idMember, 10));
      console.log(memberIds);
      
      membersofproject = memberIds.map((memberId:number) => {
        return data2.find((member: any) => member.id === memberId);
      });
      return membersofproject
    } catch (error) {
      return console.error('Error fetching products:', error);
    }
  }

  async getLeaderOfProject(id:number):Promise<any> {
    try {
      const res1 = await fetch(`${this.apiUrl}/${id}`);
      const res2 = await fetch(`${this.apiUrlEmployee}`);
      const data1 = await res1.json(); // string (members of project)
      const data2 = await res2.json(); // array (info members)
      
      let leadersofproject = {}

      leadersofproject = data2.find((member:any) => member.id === data1.leader)
      return leadersofproject
    } catch (error) {
      return console.error('Error fetching products:', error);
    }
  }

  async addProject(project: any): Promise<any> {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(project)
      });
      return await response.json();
    } catch (error) {
      return console.error('Error adding project:', error);
    }
  }

  async updateProject(id: number, project: any): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(project)
      });
      return await response.json();
    } catch (error) {
      return console.error('Error updating project:', error);
    }
  }

  async deleteProject(id: number): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`, {
        method: 'DELETE'
      });
      return await response.json();
    } catch (error) {
      return console.error('Error deleting project:', error);
    }
  }
}