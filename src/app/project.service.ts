import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:3000/du_an';

  async getProjects(): Promise<any> {
    try {
      const response = await fetch(this.apiUrl);
      return await response.json();
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