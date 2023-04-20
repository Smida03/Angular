import { Component } from '@angular/core';
import { Terrain } from '../models/terrain.model';
import { TerrainService } from '../service/terrain.service';

@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrls: ['./reserver.component.css']
})
export class ReserverComponent {
  terrains: Terrain[]=[];

  constructor(private terrainService: TerrainService) { }

  ngOnInit() {
    this.getTerrains();
      }

      getTerrains(): void {
        this.terrainService.getAllTerrains()
          .subscribe(terrains => this.terrains = terrains);
      }
    
      getTerrainImageUrl(terrain: Terrain): any {
        return this.terrainService.getTerrainImageUrl(terrain);
      }
      
}
